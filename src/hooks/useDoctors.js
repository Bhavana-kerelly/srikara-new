import { useState, useEffect } from 'react'
import { ALL_DOCTORS } from '@/data/doctors'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { assetUrl } from '@/lib/assetUrl'
import { DOCTOR_MEDIA } from '@/data/doctorMedia'

let cachedDoctorsList = [...ALL_DOCTORS]
let isFetched = false
const listeners = new Set()

const loadDynamicDoctors = async (force = false) => {
  if (isFetched && !force) return

  // Helper to normalize strings for comparison (stripping all punctuation and spaces)
  const normalizeName = (name) => name ? name.toLowerCase().replace(/[^a-z0-9]/g, '') : ''

  const mapSpecialtyToId = (specialty) => {
    if (!specialty) return 'ortho'
    const clean = specialty.trim().toLowerCase()
    if (clean.includes('ortho')) return 'ortho'
    if (clean.includes('cardio')) return 'cardio'
    if (clean.includes('neuro')) return 'neuro'
    if (clean.includes('nephro')) return 'nephro'
    if (clean.includes('pulmo')) return 'pulmo'
    if (clean.includes('gastro')) return 'gastro'
    if (clean.includes('physician') || clean.includes('general')) return 'physician'
    if (clean.includes('urology')) return 'urology'
    if (clean.includes('gyn') || clean.includes('obstetric')) return 'gyn'
    return clean.slice(0, 5) || 'ortho'
  }

  // Format dynamic doctors consistently with static schema
  const resolveImage = (raw) => {
    if (!raw) return assetUrl('doctors/doctor-placeholder.png')
    if (/^(https?:\/\/|data:|blob:)/i.test(raw)) return raw
    const cleaned = raw.replace(/^\/?(sri\/)?/, '')
    return cleaned ? assetUrl(cleaned) : assetUrl('doctors/doctor-placeholder.png')
  }

  const formatDoctor = (d) => {
    const rawSpecialty = d.specialty || 'Orthopedics'
    const generatedSlug = d.name
      ? d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      : 'unknown-doctor'
    const resolvedBio = d.about || d.bio || ''

    // Match static doctor by ID or strict normalized name
    const staticMatch = ALL_DOCTORS.find(
      sd => String(sd.id) === String(d.id) || (sd.name && normalizeName(sd.name) === normalizeName(d.name))
    )

    // If matching a static doctor, static data is 100% authoritative
    if (staticMatch) {
      return {
        ...d,
        ...staticMatch,
        image: staticMatch.image || resolveImage(d.photoUrl || d.image),
        fallback: staticMatch.fallback || assetUrl('doctors/doctor-placeholder.png')
      }
    }

    const rawImg = d.photoUrl || d.image
    const imgSrc = rawImg ? resolveImage(rawImg) : assetUrl('doctors/doctor-placeholder.png')
    const doctorSlug = d.slug || generatedSlug
    const defaultMedia = DOCTOR_MEDIA[doctorSlug] || DOCTOR_MEDIA['default']
    const initialBlogs = d.blogs !== undefined ? d.blogs : (defaultMedia?.blogs || [])

    return {
      ...d,
      id: Number(d.id) || d.id,
      slug: doctorSlug,
      branch: d.branch || 'LB Nagar',
      specialty: rawSpecialty,
      specialtyId: mapSpecialtyToId(rawSpecialty),
      image: imgSrc,
      fallback: assetUrl('doctors/doctor-placeholder.png'),
      label: d.tagline || d.label || rawSpecialty,
      expertise: Array.isArray(d.expertise) ? d.expertise : [rawSpecialty],
      sub: d.sub || '',
      exp: d.exp || '10+ Years',
      availability: d.availability || 'Mon - Sat: 10:00 AM - 5:00 PM',
      phone: d.phone || '9247958308',
      whatsapp: d.whatsapp || '919247958308',
      about: resolvedBio,
      bio: resolvedBio,
      languages: Array.isArray(d.languages)
        ? d.languages
        : (d.languages ? d.languages.split(',').map(s => s.trim()) : ['English']),
      education: Array.isArray(d.education)
        ? d.education
        : (d.education ? d.education.split(',').map(s => s.trim()) : []),
      blogs: initialBlogs
    }
  }

  const combineWithStaticDoctors = (dynamicDocs) => {
    const staticIdSet = new Set(ALL_DOCTORS.map(sd => String(sd.id)))
    const staticNameSet = new Set(ALL_DOCTORS.map(sd => normalizeName(sd.name)))

    const customDynamicDocs = dynamicDocs
      .filter(d => {
        if (d.status === 'Deleted' || d.status === 'Inactive') return false
        const strId = String(d.id)
        const normName = normalizeName(d.name)
        const isNumeric = typeof d.id === 'number' || (/^\d+$/).test(strId)
        
        // If it matches a static doctor by ID or normalized name, ignore from dynamic custom list (static list already has it)
        if (staticIdSet.has(strId) || staticNameSet.has(normName)) return false
        
        // If it has a static numeric ID but is NOT in ALL_DOCTORS (meaning deleted from code), discard it
        if (isNumeric) return false

        return true
      })
      .map(formatDoctor)

    return [...ALL_DOCTORS, ...customDynamicDocs]
  }

  // 1. Try to load from Firestore
  try {
    if (db) {
      const docSnap = await getDocs(collection(db, 'doctors'))
      if (!docSnap.empty) {
        const fbDocs = docSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        cachedDoctorsList = combineWithStaticDoctors(fbDocs)
        isFetched = true
        listeners.forEach(l => l(cachedDoctorsList))
        return // success
      }
    }
  } catch (err) {
    console.warn('Firestore fetch failed in useDoctors, falling back to local storage:', err)
  }

  // 2. Try to load from LocalStorage cache
  try {
    const cached = localStorage.getItem('srikara_cms_data')
    if (cached) {
      const parsed = JSON.parse(cached)
      if (parsed.doctors && parsed.doctors.length > 0) {
        cachedDoctorsList = combineWithStaticDoctors(parsed.doctors)
        isFetched = true
        listeners.forEach(l => l(cachedDoctorsList))
      }
    }
  } catch (e) {
    console.warn('Error loading dynamic doctors in useDoctors:', e)
  }
}

export function useDoctors() {
  const [doctors, setDoctors] = useState(cachedDoctorsList)
  const [loading, setLoading] = useState(!isFetched)

  useEffect(() => {
    const handleChange = (newList) => {
      setDoctors(newList)
      setLoading(false)
    }
    listeners.add(handleChange)
    
    // Trigger background fetch/revalidation
    loadDynamicDoctors(true)

    // If it was already fetched once, we don't wait for loading state
    if (isFetched) {
      setLoading(false)
    }

    return () => {
      listeners.delete(handleChange)
    }
  }, [])

  return { doctors, loading }
}
