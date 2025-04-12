This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

วิธีการรันโปรเจค Next.js:

เตรียมสภาพแวดล้อม:

ต้องมี Node.js ติดตั้งในเครื่องของคุณ (แนะนำเวอร์ชัน 14.x ขึ้นไป)
ตรวจสอบได้โดยรันคำสั่ง node -v ในเทอร์มินัล


โคลนหรือดาวน์โหลดโปรเจค:
git clone https://github.com/XAM-9/test_carshop.git
cd test_carshop

ติดตั้ง Dependencies:
npm install
หรือถ้าใช้ Yarn:
yarn install

รันโปรเจคในโหมดพัฒนา:
npm run dev
หรือถ้าใช้ Yarn:
yarn dev

เข้าชมเว็บไซต์:

เปิดเบราว์เซอร์และไปที่ http://localhost:3000



หมายเหตุเพิ่มเติม:

หากพบ error เกี่ยวกับ dependencies ที่ไม่สามารถติดตั้งได้ ลองอัปเดต npm ด้วยคำสั่ง npm update -g npm
หากต้องการสร้างเวอร์ชันสำหรับใช้งานจริง (production) ให้รันคำสั่ง npm run build ตามด้วย npm start
ตรวจสอบไฟล์ .env หรือ .env.local ว่ามีหรือไม่ ถ้ามีอาจจำเป็นต้องกำหนดค่าต่างๆ ตามที่ระบุในไฟล์นั้น
