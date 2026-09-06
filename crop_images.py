import os
from PIL import Image

src_path = r"C:\Users\bhava\.gemini\antigravity-ide\brain\9a2d405b-d4e4-4949-a4a6-cc3239761d60\.user_uploaded\media_1788709044150.jpg"
out_dir = r"d:\DOWNLOADS\srikara\srikara\public\images\awards"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src_path)
width, height = img.size
print(f"Source size: {width}x{height}")

# Target crops based on relative coordinates in the mockup image:
# 1. Hero right visual: The crystal award with rings and 01
# Box: x ~ [0.45, 1.0], y ~ [0.0, 0.31]
hero_box = (int(width * 0.46), 0, width, int(height * 0.31))
hero_img = img.crop(hero_box)
hero_img.save(os.path.join(out_dir, "hero-award-crystal.jpg"), quality=95)

# 2. Card 1: ET Legend (Round blue crystal plaque)
# In section 2:
# Card 1 image box: x ~ [0.06, 0.285], y ~ [0.438, 0.542]
c1_box = (int(width * 0.059), int(height * 0.437), int(width * 0.287), int(height * 0.542))
img.crop(c1_box).save(os.path.join(out_dir, "award-et-legend.jpg"), quality=95)

# 3. Card 2: 2021 Times Health (Crystal star tower trophy)
# Card 2 image box: x ~ [0.301, 0.509], y ~ [0.437, 0.542]
c2_box = (int(width * 0.301), int(height * 0.437), int(width * 0.509), int(height * 0.542))
img.crop(c2_box).save(os.path.join(out_dir, "award-times-health.jpg"), quality=95)

# 4. Card 3: 2020 Best Orthopedic (Gold star medallion)
# Card 3 image box: x ~ [0.523, 0.729], y ~ [0.437, 0.542]
c3_box = (int(width * 0.523), int(height * 0.437), int(width * 0.729), int(height * 0.542))
img.crop(c3_box).save(os.path.join(out_dir, "award-orthopedic.jpg"), quality=95)

# 5. Card 4: 2020 Best Gastro (Teardrop crystal plaque)
# Card 4 image box: x ~ [0.743, 0.927], y ~ [0.437, 0.542]
c4_box = (int(width * 0.743), int(height * 0.437), int(width * 0.927), int(height * 0.542))
img.crop(c4_box).save(os.path.join(out_dir, "award-gastroenterology.jpg"), quality=95)

# 6. Card 5: 2019 Best Hospital (Partially shown, but let's grab what's there)
# Card 5 image box: x ~ [0.941, 1.0], y ~ [0.437, 0.542]
c5_box = (int(width * 0.941), int(height * 0.437), width, int(height * 0.542))
img.crop(c5_box).save(os.path.join(out_dir, "award-hospital-2019.jpg"), quality=95)

# 7. Milestones right visual: 3D illuminated glowing knee joint
# Box: x ~ [0.76, 1.0], y ~ [0.73, 1.0]
knee_box = (int(width * 0.76), int(height * 0.73), width, height)
img.crop(knee_box).save(os.path.join(out_dir, "milestone-knee-3d.jpg"), quality=95)

print("All cropped images saved successfully!")
