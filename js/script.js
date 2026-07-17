/* ==========================================
   GREEN HARVEST MYSORE
   MAIN STYLESHEET
========================================== */

/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ========= ROOT ========= */

:root{
    --primary:#1B5E20;
    --primary-light:#2E7D32;
    --accent:#66BB6A;
    --white:#ffffff;
    --dark:#222;
    --text:#555;
    --bg:#f8faf8;
    --shadow:0 10px 30px rgba(0,0,0,.08);
    --radius:16px;
    --transition:.35s ease;
}

/* ========= RESET ========= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:var(--bg);
    color:var(--dark);
    line-height:1.7;
    overflow-x:hidden;
}

img{
    width:100%;
    display:block;
}

a{
    text-decoration:none;
    color:inherit;
}

ul{
    list-style:none;
}

.container{
    width:min(1200px,90%);
    margin:auto;
}

.section{
    padding:90px 0;
}

/* ========= TYPOGRAPHY ========= */

h1,h2,h3,h4{
    color:var(--dark);
    font-weight:700;
}

h1{
    font-size:3.6rem;
    line-height:1.2;
}

h2{
    font-size:2.5rem;
    margin-bottom:20px;
}

h3{
    font-size:1.3rem;
}

p{
    color:var(--text);
}

.section-heading{
    text-align:center;
    max-width:700px;
    margin:0 auto 60px;
}

.section-heading span,
.section-badge{
    display:inline-block;
    background:#e8f5e9;
    color:var(--primary);
    padding:8px 18px;
    border-radius:50px;
    font-weight:600;
    margin-bottom:15px;
}

/* ========= BUTTONS ========= */

.primary-btn,
.secondary-btn,
.call-btn,
.whatsapp-btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    padding:14px 28px;
    border-radius:50px;
    font-weight:600;
    transition:var(--transition);
}

.primary-btn{
    background:var(--primary);
    color:#fff;
}

.primary-btn:hover{
    background:var(--primary-light);
    transform:translateY(-3px);
}

.secondary-btn{
    border:2px solid var(--primary);
    color:var(--primary);
}

.secondary-btn:hover{
    background:var(--primary);
    color:#fff;
}

/* ========= TOP BAR ========= */

.top-bar{
    background:var(--primary);
    color:#fff;
    font-size:.9rem;
    padding:10px 0;
}

.top-bar-content{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:20px;
}

.top-bar i{
    margin-right:8px;
}

/* ========= HEADER ========= */

.header{
    position:sticky;
    top:0;
    z-index:999;
    background:rgba(255,255,255,.95);
    backdrop-filter:blur(12px);
    box-shadow:0 2px 20px rgba(0,0,0,.05);
}

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:80px;
}

.logo{
    display:flex;
    align-items:center;
    gap:12px;
}

.logo-icon{
    width:55px;
    height:55px;
    border-radius:50%;
    background:var(--primary);
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.4rem;
}

.logo h2{
    margin:0;
    font-size:1.3rem;
    color:var(--primary);
}

.logo span{
    letter-spacing:3px;
    font-size:.8rem;
    color:#777;
}

.nav-links{
    display:flex;
    gap:35px;
}

.nav-links a{
    font-weight:500;
    transition:.3s;
}

.nav-links a:hover{
    color:var(--primary);
}

.nav-buttons{
    display:flex;
    gap:15px;
}

.call-btn{
    border:2px solid var(--primary);
    color:var(--primary);
}

.call-btn:hover{
    background:var(--primary);
    color:#fff;
}

.whatsapp-btn{
    background:#25D366;
    color:#fff;
}

.whatsapp-btn:hover{
    transform:translateY(-3px);
}

.hamburger{
    display:none;
    cursor:pointer;
}

.hamburger span{
    width:28px;
    height:3px;
    background:#222;
    margin:5px 0;
    display:block;
}

/* ========= HERO ========= */

.hero{
    position:relative;
    min-height:90vh;
    display:flex;
    align-items:center;
    overflow:hidden;
    background:linear-gradient(135deg,#f5fff5,#e8f5e9);
}

.hero-container{
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:center;
    gap:60px;
}

.hero-badge{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:10px 20px;
    background:#fff;
    border-radius:50px;
    color:var(--primary);
    box-shadow:var(--shadow);
    margin-bottom:25px;
}

.hero h1 span{
    color:var(--primary);
}

.hero p{
    margin:25px 0;
    font-size:1.05rem;
}

.hero-buttons{
    display:flex;
    gap:20px;
    margin-bottom:35px;
}

.hero-features{
    display:flex;
    gap:30px;
    flex-wrap:wrap;
}

.hero-features div{
    display:flex;
    align-items:center;
    gap:8px;
    font-weight:500;
}

.hero-features i{
    color:var(--primary);
}

.hero-image img{
    border-radius:25px;
    box-shadow:var(--shadow);
}
/*==========================================
ABOUT
==========================================*/

.about-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:70px;
    align-items:center;
}

.about-image img{
    border-radius:20px;
    box-shadow:var(--shadow);
}

.about-content p{
    margin:20px 0;
}

.about-features{
    margin-top:35px;
    display:grid;
    gap:20px;
}

.feature{
    display:flex;
    align-items:center;
    gap:18px;
    background:#fff;
    padding:18px;
    border-radius:15px;
    box-shadow:var(--shadow);
}

.feature i{
    width:60px;
    height:60px;
    border-radius:50%;
    background:var(--primary);
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.3rem;
}

/*==========================================
WHY CHOOSE US
==========================================*/

.why{
    background:#f4f9f4;
}

.why-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.why-card{
    background:#fff;
    padding:35px 25px;
    text-align:center;
    border-radius:20px;
    box-shadow:var(--shadow);
    transition:var(--transition);
}

.why-card:hover{
    transform:translateY(-10px);
}

.why-card i{
    width:75px;
    height:75px;
    border-radius:50%;
    background:var(--primary);
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:28px;
    margin:auto auto 20px;
}

.why-card h3{
    margin-bottom:12px;
}

/*==========================================
PRODUCTS
==========================================*/

.product-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:35px;
}

.product-card{
    background:#fff;
    border-radius:20px;
    overflow:hidden;
    box-shadow:var(--shadow);
    transition:var(--transition);
}

.product-card:hover{
    transform:translateY(-10px);
}

.product-card img{
    height:250px;
    object-fit:cover;
}

.product-content{
    padding:25px;
}

.product-content h3{
    margin-bottom:15px;
}

.product-content p{
    margin-bottom:20px;
}

.product-content a{
    display:inline-block;
    color:var(--primary);
    font-weight:600;
}

/*==========================================
INDUSTRIES
==========================================*/

.industries{
    background:#f7faf7;
}

.industry-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:25px;
}

.industry-card{
    background:#fff;
    border-radius:18px;
    padding:30px;
    text-align:center;
    box-shadow:var(--shadow);
    transition:var(--transition);
}

.industry-card:hover{
    transform:translateY(-8px);
}

.industry-card i{
    font-size:38px;
    color:var(--primary);
    margin-bottom:15px;
}

/*==========================================
PROCESS
==========================================*/

.process-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:30px;
}

.process-card{
    position:relative;
    background:#fff;
    padding:40px 25px;
    border-radius:20px;
    text-align:center;
    box-shadow:var(--shadow);
}

.number{
    width:70px;
    height:70px;
    border-radius:50%;
    background:var(--primary);
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:22px;
    font-weight:bold;
    margin:0 auto 25px;
}

.process-card h3{
    margin-bottom:15px;
}

/*==========================================
GALLERY
==========================================*/

.gallery{
    background:#f5faf5;
}

.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
}

.gallery-grid img{
    height:260px;
    object-fit:cover;
    border-radius:18px;
    box-shadow:var(--shadow);
    transition:var(--transition);
    cursor:pointer;
}

.gallery-grid img:hover{
    transform:scale(1.05);
}

/*==========================================
CONTACT
==========================================*/

.contact{
    background:#ffffff;
}

.contact-wrapper{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
    align-items:start;
}

.contact-info p{
    margin-bottom:25px;
}

.contact-item{
    display:flex;
    align-items:flex-start;
    gap:18px;
    margin-bottom:25px;
}

.contact-item i{
    width:55px;
    height:55px;
    border-radius:50%;
    background:var(--primary);
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    flex-shrink:0;
}

.contact-buttons{
    display:flex;
    gap:15px;
    margin-top:30px;
    flex-wrap:wrap;
}

/* Form */

.contact-form{
    background:#fff;
    padding:40px;
    border-radius:20px;
    box-shadow:var(--shadow);
}

.contact-form form{
    display:flex;
    flex-direction:column;
    gap:20px;
}

.contact-form input,
.contact-form textarea{
    width:100%;
    padding:16px;
    border:1px solid #ddd;
    border-radius:12px;
    font-family:inherit;
    font-size:15px;
    transition:var(--transition);
}

.contact-form input:focus,
.contact-form textarea:focus{
    outline:none;
    border-color:var(--primary);
    box-shadow:0 0 0 3px rgba(27,94,32,.15);
}

.contact-form textarea{
    resize:vertical;
    min-height:150px;
}

.contact-form button{
    border:none;
    cursor:pointer;
}

/*==========================================
GOOGLE MAP
==========================================*/

.map{
    width:100%;
}

.map iframe{
    width:100%;
    height:450px;
    border:none;
}

/*==========================================
FOOTER
==========================================*/

footer{
    background:#1B5E20;
    color:#fff;
    padding-top:70px;
}

.footer-grid{
    display:grid;
    grid-template-columns:2fr 1fr 1fr;
    gap:40px;
}

.footer-grid h3,
.footer-grid h4{
    color:#fff;
    margin-bottom:20px;
}

.footer-grid p,
.footer-grid a{
    color:rgba(255,255,255,.85);
}

.footer-grid ul li{
    margin-bottom:12px;
}

.footer-grid a:hover{
    color:#fff;
}

.footer-bottom{
    margin-top:50px;
    border-top:1px solid rgba(255,255,255,.15);
    text-align:center;
    padding:25px 0;
}

/*==========================================
FLOATING WHATSAPP
==========================================*/

.floating-whatsapp{
    position:fixed;
    right:25px;
    bottom:25px;
    width:60px;
    height:60px;
    background:#25D366;
    color:#fff;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
    box-shadow:0 10px 25px rgba(0,0,0,.2);
    z-index:1000;
    transition:var(--transition);
}

.floating-whatsapp:hover{
    transform:scale(1.1);
}

/*==========================================
BACK TO TOP
==========================================*/

#backToTop{
    position:fixed;
    right:25px;
    bottom:100px;
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    background:var(--primary);
    color:#fff;
    font-size:20px;
    cursor:pointer;
    display:none;
    box-shadow:var(--shadow);
    z-index:999;
    transition:var(--transition);
}

#backToTop:hover{
    transform:translateY(-5px);
}

/*==========================================
ANIMATIONS
==========================================*/

.fade-up{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

.fade-up.show{
    opacity:1;
    transform:translateY(0);
}

/*==========================================
SCROLLBAR
==========================================*/

::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-track{
    background:#f1f1f1;
}

::-webkit-scrollbar-thumb{
    background:var(--primary);
    border-radius:10px;
}

::-webkit-scrollbar-thumb:hover{
    background:var(--primary-light);
}

/*==========================================
IMAGE HOVER EFFECT
==========================================*/

.product-card,
.why-card,
.industry-card,
.process-card,
.gallery-grid img{
    transition:all .35s ease;
}

.product-card:hover,
.why-card:hover,
.industry-card:hover,
.process-card:hover{
    box-shadow:0 18px 40px rgba(0,0,0,.12);
}