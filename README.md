# Login & Register Application

Bu React + TypeScript ilovasi real API bilan integratsiya qilingan login va ro'yxatdan o'tish funksiyalarini taqdim etadi.

## Texnologiyalar

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components
- **React Hook Form + Zod** - Form validation
- **Zustand** - State management
- **React Query** - API data fetching
- **React Router** - Navigation
- **React Hot Toast** - Notifications

## API Integratsiya

Ilova quyidagi API endpointlarini ishlatadi:

- **Base URL**: `https://api-tz.astix.uz`
- **Login**: `POST /login`
- **Register**: `POST /register`

### API Request Format

#### Login
```json
{
  "phone": "998931234567",
  "password": "password123"
}
```

#### Register
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "phone": "998931234567",
  "password": "password123"
}
```

### API Response Format
```json
{
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "998931234567"
  },
  "token": "jwt_token_here"
}
```

## O'rnatish

```bash
npm install
```

## Ishga tushirish

```bash
npm run dev
```

## Funksiyalar

### Login sahifasi
- Telefon raqam va parol validatsiyasi
- Real API bilan integratsiya
- Xatolik xabarlari
- Loading holatlar
- Muvaffaqiyatli kirishdan keyin Dashboard'ga yo'naltirish

### Ro'yxatdan o'tish sahifasi
- To'liq ma'lumotlar validatsiyasi
- Parol tasdiqlash
- Real API bilan integratsiya
- Xatolik xabarlari
- Loading holatlar

### Dashboard
- Foydalanuvchi ma'lumotlari ko'rsatish
- Chiqish funksiyasi
- Authentication holatini saqlash

### Xavfsizlik
- JWT token avtomatik qo'shish
- Protected routes
- Authentication holatini localStorage'da saqlash
- Avtomatik redirect'lar

## Fayl tuzilishi

```
src/
├── components/ui/     # Shadcn UI komponentlari
├── lib/
│   └── api.ts        # API funksiyalari
├── pages/
│   ├── Login.tsx     # Login sahifasi
│   ├── Register.tsx  # Ro'yxatdan o'tish sahifasi
│   └── Dashboard.tsx # Dashboard sahifasi
├── store/
│   └── auth.ts       # Authentication state management
└── App.tsx           # Asosiy ilova komponenti
```

## Muhim xususiyatlar

1. **Real API Integratsiya** - Barcha API so'rovlari real server'ga yuboriladi
2. **Xatolik boshqaruvi** - API xatoliklari to'g'ri ko'rsatiladi
3. **Authentication** - JWT token avtomatik qo'shiladi
4. **Persistent State** - Login holati sahifa yangilangandan keyin saqlanadi
5. **Protected Routes** - Authentication talab qilinadigan sahifalar himoyalangan
6. **Responsive Design** - Barcha qurilmalarda to'g'ri ishlaydi
