# Aphelion — FRA Digital Empowerment Platform

**Aphelion** is a WebGIS-powered decision support system designed to digitize Forest Rights Act (FRA) claims and generate evidence-based policy recommendations. It empowers communities by visualizing land assets and automating scheme recommendations based on detected assets and community needs.

---

##  Key Features

###  Digital Archive
Search and analyze over **12,450+ FRA claims** with advanced multi-criteria filters and seamless export capabilities.

###  Interactive Atlas
A high-performance **WebGIS interface** to visualize land assets with dedicated layers for:
- Agriculture & Forest Cover
- Water Bodies & Irrigation
- Settlements & Infrastructure

###  AI-Powered DSS
Automated Decision Support System (DSS) that provides tailored scheme recommendations based on satellite-detected assets and ground-level community requirements.

###  Bilingual Support
Fully localized experience in both **English** and **Hindi**, ensuring accessibility for government officials and local communities alike.

---

##  Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **Database/Auth**: [Supabase](https://supabase.com/)
- **Maps**: [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

##  Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd aphelion
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

---

##  Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (buttons, cards, maps).
- `lib/`: Utility functions, contexts, and mock data.
- `public/`: Static assets and icons.
- `hooks/`: Custom React hooks.

---

##  Platform Impact

- **Total FRA Claims**: 12,450+
- **Villages Mapped**: 450+
- **Beneficiaries**: 85,000+
- **Claim Approval Rate**: 66%

---

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

## License

This project is licensed under the [Apache License 2.0](LICENSE).
