import https from 'https';

const candidates = [
  // Hero & Architecture
  { id: 'hero-architecture', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85' },
  { id: 'arch-concrete-villa', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85' },
  { id: 'arch-cultural-center', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85' },
  { id: 'arch-timber-retreat', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85' },
  { id: 'arch-monolithic-loft', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'arch-sculptural-facade', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85' },

  // Interiors
  { id: 'int-terrazzo-living', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85' },
  { id: 'int-minimal-kitchen', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85' },
  { id: 'int-concrete-bedroom', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85' },
  { id: 'int-gallery-space', url: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=85' },
  { id: 'int-sculptural-lounge', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85' },
  { id: 'int-boutique-retail', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85' },

  // Branding & Graphic Design
  { id: 'brand-editorial-books', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85' },
  { id: 'brand-luxury-stationery', url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=85' },
  { id: 'brand-publication-spread', url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85' },
  { id: 'brand-perfume-packaging', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85' },
  { id: 'brand-typography-poster', url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85' },
  { id: 'brand-coffee-identity', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85' },

  // Digital & UI/UX
  { id: 'dig-studio-display', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85' },
  { id: 'dig-workspace-tablet', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85' },
  { id: 'dig-analytics-prototype', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85' },
  { id: 'dig-minimal-laptop', url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85' },

  // Product, Industrial & Material
  { id: 'prod-lounge-chair', url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'prod-ceramic-vessels', url: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'prod-stone-lamp', url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'mat-raw-materials', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
  { id: 'mat-marble-texture', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85' },
  { id: 'mat-architectural-model', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85' },

  // Studio, Team & Workshop
  { id: 'std-open-studio', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'std-meeting-collab', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'team-elena-vance', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85' },
  { id: 'team-marcus-thorne', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85' },
  { id: 'team-sophia-chen', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85' },
  { id: 'team-julian-ross', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85' },

  // Journal Articles
  { id: 'jrn-form-space', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85' },
  { id: 'jrn-typography-modern', url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=85' },
  { id: 'jrn-material-essence', url: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=85' },
  { id: 'jrn-digital-craft', url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=85' },
  { id: 'jrn-sustainable-living', url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85' },
];

function checkUrl(candidate) {
  return new Promise((resolve) => {
    try {
      const req = https.request(candidate.url, { method: 'HEAD', timeout: 7000 }, (res) => {
        resolve({ id: candidate.id, url: candidate.url, status: res.statusCode });
      });
      req.on('error', (err) => resolve({ id: candidate.id, url: candidate.url, status: 'ERROR: ' + err.message }));
      req.on('timeout', () => {
        req.destroy();
        resolve({ id: candidate.id, url: candidate.url, status: 'TIMEOUT' });
      });
      req.end();
    } catch (e) {
      resolve({ id: candidate.id, url: candidate.url, status: 'EXCEPTION: ' + e.message });
    }
  });
}

async function verifyAll() {
  console.log(`Starting verification of ${candidates.length} candidate Unsplash URLs...`);
  const results = await Promise.all(candidates.map(checkUrl));
  let passCount = 0;
  for (const r of results) {
    const isOk = r.status === 200;
    if (isOk) passCount++;
    console.log(`[${isOk ? 'OK 200' : 'FAIL ' + r.status}] ${r.id} -> ${r.url}`);
  }
  console.log(`\nSummary: ${passCount} / ${candidates.length} passed.`);
}

verifyAll();
