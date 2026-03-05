# 🛋️ Eco Home Solutions - Frontend (React)

This is the high-performance, visually stunning frontend for **Eco Home Solutions**, a premium furniture platform designed for the Malaysian market. Built with **React** and **Vite**, it focuses on a clean "Eco-modern" aesthetic, smooth user interactions, and a fully responsive layout.

## 🎨 Design Philosophy

* **Aesthetic:** "Eco-Minimalism" using soft off-whites (`bg-slate-50`), organic rounded corners (`rounded-[32px]`), and indigo accents.
* **Interactivity:** Smooth page transitions and element entries using **Framer Motion**.
* **Clarity:** A distraction-free shopping experience (e.g., streamlined product overviews).

---

## 🚀 Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Routing:** React Router DOM
* **State Management:** React Context API (`appContext`)
* **API Client:** Axios (fetching from Node.js/Express backend)

---

## ✨ Key Frontend Features

* **Dynamic Product Gallery:** An interactive thumbnail-to-main-image gallery with hover-scale effects.
* **Intelligent Related Products:** Automatically filters and displays products from the same category using a strict 1-column (mobile) / 4-column (desktop) grid.
* **Premium Contact Page:** Features a grayscale-to-color Google Maps integration, floating background "blobs," and interactive social media tiles.
* **Global Context:** Centralized state for products and user data, ensuring consistent data flow across components.
* **Responsive Architecture:** Hand-optimized for mobile, tablet, and desktop views.

---

## 📂 Frontend Structure

```text
SRC/
├── assets/             # Static images and icons
├── components/         # Reusable UI (ProductCard, Navbar, Footer)
├── context/            # Global State (appContext.jsx)
├── pages/              # Main views (Home, Products, SingleProduct, Contact)
├── App.jsx             # Route definitions
└── main.jsx            # Entry point & Provider wrapping

```

---

## 🛠️ Setup & Installation

1. **Clone the repository:**
```bash
git clone https://github.com/shazid25/Furniture_Selling_Web_Frontend.git
cd Furniture_Selling_Web_Frontend

```


2. **Install dependencies:**
```bash
npm install

```


3. **Environment Setup:**
Create a `.env` file in the root:
```env
VITE_BACKEND_URL=http://localhost:5000

```


4. **Run in development mode:**
```bash
npm run dev

```



---

## 📞 Developer & Support

For inquiries regarding frontend architecture or design implementation for the Malaysian furniture industry:

* **Developer:** https://irfanshazidportfolio.web.app/
* **GitHub:** [shazid25](https://github.com/shazid25)
* **WhatsApp/Call:** 01647593123

---