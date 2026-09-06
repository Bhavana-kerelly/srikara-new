import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#FDF6F9] w-full pt-16 pb-28 lg:pb-16 px-8 border-t border-[#E8B4C8]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">

        {/* Brand */}
        <div>
          <div className="mb-6">
            <img
              src="https://i.ibb.co/qF1tmZrW/convert-into-high-202604060154.jpg"
              alt="Srikara Hospitals"
              className="w-[180px] h-auto object-contain mix-blend-multiply"
            />
          </div>
          <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
            A multi-specialty hospital chain specializing in Robotic Joint Replacement, Orthopedics, Spine, and Rehabilitation.
          </p>

        </div>

        {/* Specialties */}
        <div>
          <h4 className="font-bold text-[#8B1A4A] mb-6 uppercase text-xs tracking-widest">Specialties</h4>
          <ul className="space-y-4">
            {['Joint Replacement', 'Sports Medicine', 'Neurosciences', 'Cardiology'].map(item => (
              <li key={item}>
                <Link to="#" className="text-[#4A4A4A] hover:text-[#8B1A4A] text-sm transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-[#8B1A4A] mb-6 uppercase text-xs tracking-widest">Resources</h4>
          <ul className="space-y-4">
            {[
              { label: 'Current Job Openings', to: '/careers/jobs' },
              { label: 'Leadership Team', to: '/about/leadership' },
              { label: 'Awards & Recognition', to: '/about/awards' },
              { label: 'Achievements', to: '/about/achievements' },
              { label: 'Gallery', to: '/gallery' },
              { label: 'Medical Updates', to: '/news/medical-updates' },
              { label: 'International Connections', to: '/international-connections' },
            ].map(item => (
              <li key={item.label}>
                <Link to={item.to} className="text-[#4A4A4A] hover:text-[#2D3A4A] text-sm transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-[#8B1A4A] mb-6 uppercase text-xs tracking-widest">Contact Branch</h4>
          <p className="text-[#4A4A4A] text-sm mb-4 leading-relaxed">
            Srikara Hospitals, RTC Cross Roads, Street No. 7, near RTC X Road, beside NABARD, Musheerabad, Zamistanpur, Kavadiguda, Hyderabad, Telangana 500020
          </p>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-[#E8B4C8]">
            <p className="text-xs font-bold text-[#8B1A4A] mb-1">Emergency Direct</p>
            <p className="text-lg font-black text-[#8B1A4A]">92479 58308</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E8B4C8]">
        <p className="text-[#9E7B87] text-xs text-center leading-relaxed">
          © {new Date().getFullYear()} Srikara Hospitals. All Rights Reserved. Clinical Precision &amp; Human Connection.
        </p>
      </div>
    </footer>
  )
}
