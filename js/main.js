const PROJECTS = [
  {
    title: 'E-Ticaret Sitesi',
    type: 'E-Ticaret Platformu (HTML+CSS+Tailwind)',
    desc: 'Html + Css + Tailwind ile geliştirilmiş modern e-ticaret sitesi.',
    tags: ['React', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
    techs: [ 'Tailwind CSS ile responsive tasarım',  'REST API entegrasyonu'],
    link: '#',
    imgs: [
      'img/prj2_1.png',
       'img/prj2_2.png',
       'img/prj2_3.png',
    ],
    grad: 'linear-gradient(135deg,#0f1a2e,#080c14)',
    icon: '🛒'
  },
  {
    title: 'Kişisel Kitaplık Sitesi',
    type: 'KİŞİSEL PROJE',
    desc: 'React + Tailwind ile geliştirilmiş kişisel kütüphane sitesi.',
    tags: ['React', 'Tailwind CSS'],
    techs: ['React Hooks ile state yönetimi', 'LocalStorage ile veri saklama', 'Filtreleme ve arama mantığı'],
    link: '#',
    imgs: ['img/prj14.png'],
    grad: 'linear-gradient(135deg,#0d1f0d,#080c14)',
    icon: '📚'
  },
  {
    title: 'Kişisel Hava Durumu Sitesi',
    type: 'KİŞİSEL PROJE',
    desc: 'React + Tailwind ile geliştirilmiş hava durumu sitesi.',
    tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
    techs: ['OpenWeather API entegrasyonu', 'Async/Await ile veri çekme', 'Konum bazlı hava durumu'],
    link: '#',
    imgs: ['img/prj15.png'],
    grad: 'linear-gradient(135deg,#1a1200,#080c14)',
    icon: '☁️'
  },
  {
    title: 'E-Ticaret Sitesi',
    type: 'KİŞİSEL PROJE',
    desc: 'Vue.js + Tailwind tabanlı kapsamlı B2B e-ticaret sitesi',
    tags: ['Vue.js', 'Tailwind CSS', 'Pinia', 'REST API'],
    techs: ['Vue 3 Composition API', 'Pinia ile state yönetimi', 'REST API entegrasyonu', 'Rol bazlı erişim kontrolü'],
    link: '#',
    imgs: ['img/prj12.png'],
    grad: 'linear-gradient(135deg,#0d1520,#080c14)',
    icon: '🏢'
  },
    {
    title: 'Emlak Sitesi',
    type: 'KİŞİSEL PROJE',
    desc: 'Vue.js + Tailwind tabanlı kapsamlı emlak sitesi',
    tags: ['Vue.js', 'Tailwind CSS'],
    techs: ['Vue 3 Composition API', 'Pinia ile state yönetimi', 'Rol bazlı erişim kontrolü'],
    link: '#',
    imgs: ['img/pr-5.png',
       'img/pr-5-1.png',],
    grad: 'linear-gradient(135deg,#0d1520,#080c14)',
    icon: '🏢'
  },
    {
    title: 'Fitness Sitesi',
    type: 'KİŞİSEL PROJE',
    desc: 'Vue.js + Tailwind tabanlı fitness sitesi',
    tags: ['Vue.js', 'Tailwind CSS', 'Pinia', 'REST API'],
    techs: ['Vue 3 Composition API', 'Pinia ile state yönetimi', 'REST API entegrasyonu', 'Rol bazlı erişim kontrolü'],
    link: '#',
    imgs: ['img/pr-6.png',
       'img/pr-6-1.png',],
    grad: 'linear-gradient(135deg,#0d1520,#080c14)',
    icon: '🏢'
  },
  {
    title: 'Kişisel Dashboard Proje',
    type: 'KİŞİSEL PROJE',
    desc: 'Vue + Tailwind ile geliştirilen, grafik ve istatistik panellerine sahip admin yönetim sayfası. Chart.js entegrasyonu ile veri görselleştirme ve dinamik raporlama.',
    tags: ['Vue.js', 'Tailwind CSS', 'Chart.js'],
    techs: ['Vue 3 ile dinamik dashboard', 'Chart.js ile grafik görselleştirme', 'Gerçek zamanlı veri güncelleme'],
    link: '#',
    imgs: ['img/prj10.png'],
    grad: 'linear-gradient(135deg,#0f1020,#080c14)',
    icon: '🎨'
  },
];


// LIGHTBOX
let currentImgs = [], currentIdx = 0;

function openLb(i) {
  const p = PROJECTS[i];
  currentImgs = p.imgs;
  currentIdx = 0;

  document.getElementById('lb-type').textContent = p.type;
  document.getElementById('lb-title').textContent = p.title;
  document.getElementById('lb-desc').textContent = p.desc;

  
  document.getElementById('lb-tags').innerHTML = p.tags.map(t =>
    `<span class="tag">${t}</span>`
  ).join('');

  document.getElementById('lb-tech').innerHTML = p.techs.map(t =>
    `<div class="flex items-start gap-2 py-2 border-b" style="border-color:rgba(255,255,255,.05)">
      <div style="width:4px;height:4px;border-radius:50%;background:var(--bl2);margin-top:6px;flex-shrink:0"></div>
      <span class="text-sm" style="color:rgba(255,255,255,.4)">${t}</span>
    </div>`
  ).join('');

  const lnk = document.getElementById('lb-link');
  if(p.link && p.link !== '#') { lnk.href = p.link; lnk.style.display='flex'; }
  else { lnk.style.display='none'; }

  setMainImg(0);
  buildThumbs();

  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setMainImg(idx) {
  currentIdx = idx;
  const img = currentImgs[idx];
  const main = document.getElementById('lb-main');


  const testImg = new Image();
  testImg.onload = () => { main.src = img; main.style.display='block'; };
  testImg.onerror = () => {
    main.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%230e1520'/><text x='50%' y='48%' text-anchor='middle' fill='%23ffffff20' font-family='sans-serif' font-size='14'>Görsel bulunamadı — ${img}</text><text x='50%' y='56%' text-anchor='middle' fill='%23ffffff12' font-family='monospace' font-size='11'>imgs dizisine ekran görüntüsü yollarını ekleyin</text></svg>`;
    main.style.display='block';
  };
  testImg.src = img;

  document.querySelectorAll('.lb-thumb').forEach((t,i) => {
    t.classList.toggle('active', i === idx);
  });
}

function buildThumbs() {
  document.getElementById('lb-thumbs').innerHTML = currentImgs.map((img, i) => {
    const testId = `th-${i}`;
    return `<img id="${testId}" src="${img}" alt="Ekran görüntüsü ${i+1}"
      class="lb-thumb${i===0?' active':''}"
      onclick="setMainImg(${i})"
      onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'160\\' height=\\'90\\'><rect width=\\'100%25\\' height=\\'100%25\\' fill=\\'%230e1520\\'/><text x=\\'50%25\\' y=\\'55%25\\' text-anchor=\\'middle\\' fill=\\'%23ffffff15\\' font-size=\\'10\\'>Görsel ${i+1}</text></svg>'"/>`;
  }).join('');
}

function closeLb() {
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if(!document.getElementById('lb').classList.contains('open')) return;
  if(e.key==='Escape') closeLb();
  if(e.key==='ArrowRight' && currentIdx < currentImgs.length-1) setMainImg(currentIdx+1);
  if(e.key==='ArrowLeft' && currentIdx > 0) setMainImg(currentIdx-1);
});
document.getElementById('lb').addEventListener('click', e => {
  if(e.target === document.getElementById('lb')) closeLb();
});

// CURSOR
const cd=document.getElementById('cd'), cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px';});
(function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(a);})();

// LOADER
const ldEl=document.getElementById('ld'),pcEl=document.getElementById('ldp'),fiEl=document.getElementById('ldf');
let n=0;
const iv=setInterval(()=>{
  n+=Math.floor(Math.random()*10)+3;
  if(n>=100){n=100;clearInterval(iv);setTimeout(()=>ldEl.classList.add('out'),500);}
  pcEl.textContent=n; fiEl.style.width=n+'%';
},55);

// NAV SCROLL

window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('s',scrollY>60));


// REVEAL ON SCROLL

const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting) setTimeout(()=>e.target.classList.add('on'),i*70);});
},{threshold:.07});
document.querySelectorAll('.r,.rl,.rr').forEach(el=>obs.observe(el));


const spObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('on');});
},{threshold:.3});
document.querySelectorAll('.spf').forEach(el=>spObs.observe(el));