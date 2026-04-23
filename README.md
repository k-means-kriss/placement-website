# 🎓 Placement Support System : A way to you future

A web-based Placement Support System built using Flask that streamlines the interaction between students, companies, and administrators. The platform enables efficient management of placement drives, student applications, and company recruitment processes.

---

## 🚀 Features

### 👨‍🎓 Student Module

* Register and login securely
* View available placement drives
* Apply for jobs
* Track application status

### 🏢 Company Module

* Register and manage company profile
* Post placement drives
* Set eligibility criteria and deadlines
* View applicants

### 🛠️ Admin Module

* Approve/reject company placement drives
* Manage users (students & companies)
* Monitor overall placement activity

---

## 🧩 System Highlights

* Role-based authentication (Student / Company / Admin)
* Dynamic dashboards for each user type
* Real-time placement drive updates
* Clean and responsive UI using Bootstrap
* Structured database handling with SQLite3

---

## ⚙️ Tech Stack

* **Backend:** Flask (Python)
* **Frontend:** HTML, CSS, Bootstrap
* **Templating Engine:** Jinja2
* **Database:** SQLite3

---

## 📂 Project Structure

```
placement-support-system/
│
├── static/              # CSS, JS, images
├── templates/           # Jinja2 HTML templates
│   ├── student/
│   ├── company/
│   ├── admin/
│
├── app.py               # Main Flask application
├── database.db          # SQLite database (auto-created)
├── requirements.txt     # Dependencies
└── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/placement-support-system.git
cd placement-support-system
```

### 2️⃣ Create Virtual Environment (Recommended)

```bash
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the Application

```bash
python app.py
```

### 5️⃣ Open in Browser

```
http://127.0.0.1:5000/
```

---

## 📊 Database

* Uses SQLite3 (lightweight and easy to manage)
* Database is automatically created via Python scripts
* Tables include:

  * Students
  * Companies
  * Placement Drives
  * Applications

---

## 🔐 Authentication

* Secure login system for all roles
* Session-based authentication using Flask
* Role-based access control

---

## 📌 Use Cases

* Colleges to manage campus placements
* Students to track job opportunities
* Companies to recruit efficiently
* Admins to control and monitor the process

---

## 🚧 Current Status

* Core features implemented
* UI and backend integration completed
* Future improvements ongoing

---

## 🔮 Future Enhancements

* Resume upload & parsing
* Email notifications for application updates
* Analytics dashboard for placement statistics
* Integration with external job portals
* AI-based job recommendation system

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is for educational purposes. License details will be added soon.

---

## 💡 Vision

To build a scalable and intelligent placement management system that simplifies the hiring process for institutions and companies while improving opportunities for students.

---
