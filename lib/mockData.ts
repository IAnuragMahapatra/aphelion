export interface FRAClaim {
  id: string;
  pattaId: string;
  villageName: string;
  villageNameHi: string;
  block: string;
  district: string;
  claimType: 'Individual' | 'Community';
  status: 'Approved' | 'Pending' | 'Rejected';
  hectares: number;
  claimDate: string;
  assets: {
    agriculture: number;
    forest: number;
    water: number;
    settlement: number;
  };
}

export interface KPIData {
  totalClaims: number;
  approved: number;
  pending: number;
  rejected: number;
  villagesMapped: number;
}

export interface SchemeRecommendation {
  name: string;
  nameHi: string;
  status: 'eligible' | 'warning' | 'not-eligible';
  reason: string;
  reasonHi: string;
}

export const kpiData: KPIData = {
  totalClaims: 12450,
  approved: 8230,
  pending: 4220,
  rejected: 320,
  villagesMapped: 1850,
};

export const mockClaims: FRAClaim[] = [
  {
    id: '1',
    pattaId: 'FRA/2023/001',
    villageName: 'Bhilwara',
    villageNameHi: 'भीलवाड़ा',
    block: 'Kotra',
    district: 'Udaipur',
    claimType: 'Community',
    status: 'Approved',
    hectares: 45.2,
    claimDate: '2023-01-15',
    assets: { agriculture: 25, forest: 15, water: 3, settlement: 2.2 },
  },
  {
    id: '2',
    pattaId: 'FRA/2023/002',
    villageName: 'Dungri',
    villageNameHi: 'डुंगरी',
    block: 'Salumbar',
    district: 'Udaipur',
    claimType: 'Individual',
    status: 'Pending',
    hectares: 5.5,
    claimDate: '2023-02-20',
    assets: { agriculture: 4, forest: 1.5, water: 0, settlement: 0 },
  },
  {
    id: '3',
    pattaId: 'FRA/2023/003',
    villageName: 'Jhadol',
    villageNameHi: 'झाडोल',
    block: 'Jhadol',
    district: 'Udaipur',
    claimType: 'Community',
    status: 'Approved',
    hectares: 78.3,
    claimDate: '2022-11-05',
    assets: { agriculture: 45, forest: 25, water: 5, settlement: 3.3 },
  },
  {
    id: '4',
    pattaId: 'FRA/2023/004',
    villageName: 'Gogunda',
    villageNameHi: 'गोगुंदा',
    block: 'Gogunda',
    district: 'Udaipur',
    claimType: 'Individual',
    status: 'Approved',
    hectares: 3.2,
    claimDate: '2023-03-10',
    assets: { agriculture: 2.5, forest: 0.7, water: 0, settlement: 0 },
  },
  {
    id: '5',
    pattaId: 'FRA/2023/005',
    villageName: 'Kherwara',
    villageNameHi: 'खेरवाड़ा',
    block: 'Kherwara',
    district: 'Udaipur',
    claimType: 'Community',
    status: 'Pending',
    hectares: 62.8,
    claimDate: '2023-04-12',
    assets: { agriculture: 35, forest: 20, water: 4, settlement: 3.8 },
  },
  {
    id: '6',
    pattaId: 'FRA/2023/006',
    villageName: 'Sarada',
    villageNameHi: 'सारडा',
    block: 'Sarada',
    district: 'Udaipur',
    claimType: 'Individual',
    status: 'Approved',
    hectares: 4.8,
    claimDate: '2023-01-25',
    assets: { agriculture: 3.5, forest: 1.3, water: 0, settlement: 0 },
  },
  {
    id: '7',
    pattaId: 'FRA/2023/007',
    villageName: 'Semari',
    villageNameHi: 'सेमाड़ी',
    block: 'Semari',
    district: 'Udaipur',
    claimType: 'Community',
    status: 'Approved',
    hectares: 95.5,
    claimDate: '2022-12-08',
    assets: { agriculture: 50, forest: 35, water: 7, settlement: 3.5 },
  },
  {
    id: '8',
    pattaId: 'FRA/2023/008',
    villageName: 'Bari Sadri',
    villageNameHi: 'बड़ी सादड़ी',
    block: 'Bari Sadri',
    district: 'Chittorgarh',
    claimType: 'Individual',
    status: 'Pending',
    hectares: 6.2,
    claimDate: '2023-05-15',
    assets: { agriculture: 5, forest: 1.2, water: 0, settlement: 0 },
  },
  {
    id: '9',
    pattaId: 'FRA/2023/009',
    villageName: 'Kapasan',
    villageNameHi: 'कपासन',
    block: 'Kapasan',
    district: 'Chittorgarh',
    claimType: 'Community',
    status: 'Approved',
    hectares: 52.3,
    claimDate: '2023-02-18',
    assets: { agriculture: 30, forest: 18, water: 2, settlement: 2.3 },
  },
  {
    id: '10',
    pattaId: 'FRA/2023/010',
    villageName: 'Nimbahera',
    villageNameHi: 'निम्बाहेड़ा',
    block: 'Nimbahera',
    district: 'Chittorgarh',
    claimType: 'Individual',
    status: 'Approved',
    hectares: 7.5,
    claimDate: '2023-03-22',
    assets: { agriculture: 6, forest: 1.5, water: 0, settlement: 0 },
  },
  {
    id: '11',
    pattaId: 'FRA/2023/011',
    villageName: 'Pratapgarh',
    villageNameHi: 'प्रतापगढ़',
    block: 'Pratapgarh',
    district: 'Pratapgarh',
    claimType: 'Community',
    status: 'Pending',
    hectares: 68.9,
    claimDate: '2023-06-01',
    assets: { agriculture: 40, forest: 22, water: 4, settlement: 2.9 },
  },
  {
    id: '12',
    pattaId: 'FRA/2023/012',
    villageName: 'Arnod',
    villageNameHi: 'अरनोद',
    block: 'Arnod',
    district: 'Pratapgarh',
    claimType: 'Individual',
    status: 'Approved',
    hectares: 5.1,
    claimDate: '2023-04-05',
    assets: { agriculture: 4.2, forest: 0.9, water: 0, settlement: 0 },
  },
  {
    id: '13',
    pattaId: 'FRA/2023/013',
    villageName: 'Chhoti Sadri',
    villageNameHi: 'छोटी सादड़ी',
    block: 'Chhoti Sadri',
    district: 'Pratapgarh',
    claimType: 'Community',
    status: 'Approved',
    hectares: 85.7,
    claimDate: '2022-10-20',
    assets: { agriculture: 48, forest: 30, water: 5, settlement: 2.7 },
  },
  {
    id: '14',
    pattaId: 'FRA/2023/014',
    villageName: 'Dhariawad',
    villageNameHi: 'धरियावाद',
    block: 'Dhariawad',
    district: 'Pratapgarh',
    claimType: 'Individual',
    status: 'Pending',
    hectares: 4.5,
    claimDate: '2023-07-10',
    assets: { agriculture: 3.8, forest: 0.7, water: 0, settlement: 0 },
  },
  {
    id: '15',
    pattaId: 'FRA/2023/015',
    villageName: 'Peepalkhunt',
    villageNameHi: 'पीपलखूंट',
    block: 'Peepalkhunt',
    district: 'Pratapgarh',
    claimType: 'Community',
    status: 'Approved',
    hectares: 72.4,
    claimDate: '2023-01-30',
    assets: { agriculture: 42, forest: 24, water: 4, settlement: 2.4 },
  },
  {
    id: '16',
    pattaId: 'FRA/2023/016',
    villageName: 'Banswara',
    villageNameHi: 'बांसवाड़ा',
    block: 'Banswara',
    district: 'Banswara',
    claimType: 'Community',
    status: 'Approved',
    hectares: 110.5,
    claimDate: '2022-09-15',
    assets: { agriculture: 60, forest: 40, water: 8, settlement: 2.5 },
  },
  {
    id: '17',
    pattaId: 'FRA/2023/017',
    villageName: 'Ghatol',
    villageNameHi: 'घाटोल',
    block: 'Ghatol',
    district: 'Banswara',
    claimType: 'Individual',
    status: 'Pending',
    hectares: 6.8,
    claimDate: '2023-08-05',
    assets: { agriculture: 5.5, forest: 1.3, water: 0, settlement: 0 },
  },
  {
    id: '18',
    pattaId: 'FRA/2023/018',
    villageName: 'Kushalgarh',
    villageNameHi: 'कुशलगढ़',
    block: 'Kushalgarh',
    district: 'Banswara',
    claimType: 'Community',
    status: 'Approved',
    hectares: 92.3,
    claimDate: '2023-02-12',
    assets: { agriculture: 52, forest: 32, water: 6, settlement: 2.3 },
  },
  {
    id: '19',
    pattaId: 'FRA/2023/019',
    villageName: 'Garhi',
    villageNameHi: 'गढ़ी',
    block: 'Garhi',
    district: 'Banswara',
    claimType: 'Individual',
    status: 'Approved',
    hectares: 5.9,
    claimDate: '2023-03-28',
    assets: { agriculture: 4.8, forest: 1.1, water: 0, settlement: 0 },
  },
  {
    id: '20',
    pattaId: 'FRA/2023/020',
    villageName: 'Bagidora',
    villageNameHi: 'बागीदौरा',
    block: 'Bagidora',
    district: 'Banswara',
    claimType: 'Community',
    status: 'Pending',
    hectares: 58.6,
    claimDate: '2023-09-01',
    assets: { agriculture: 35, forest: 18, water: 3, settlement: 2.6 },
  },
];

export const districts = ['Udaipur', 'Chittorgarh', 'Pratapgarh', 'Banswara', 'Dungarpur'];

export const blocks: Record<string, string[]> = {
  Udaipur: ['Kotra', 'Salumbar', 'Jhadol', 'Gogunda', 'Kherwara', 'Sarada', 'Semari'],
  Chittorgarh: ['Bari Sadri', 'Kapasan', 'Nimbahera', 'Begun', 'Rashmi'],
  Pratapgarh: ['Pratapgarh', 'Arnod', 'Chhoti Sadri', 'Dhariawad', 'Peepalkhunt'],
  Banswara: ['Banswara', 'Ghatol', 'Kushalgarh', 'Garhi', 'Bagidora'],
  Dungarpur: ['Dungarpur', 'Sagwara', 'Aspur', 'Simalwara'],
};

export const schemeRecommendations: SchemeRecommendation[] = [
  {
    name: 'PM-KISAN',
    nameHi: 'पीएम-किसान',
    status: 'eligible',
    reason: 'Agricultural land detected (45 hectares). Eligible for direct income support.',
    reasonHi: 'कृषि भूमि का पता चला (45 हेक्टेयर)। प्रत्यक्ष आय सहायता के लिए पात्र।',
  },
  {
    name: 'Pradhan Mantri Matsya Sampada Yojana',
    nameHi: 'प्रधानमंत्री मत्स्य संपदा योजना',
    status: 'eligible',
    reason: 'Water bodies detected (2 ponds, 3.2 hectares). Eligible for fisheries development.',
    reasonHi: 'जल निकाय का पता चला (2 तालाब, 3.2 हेक्टेयर)। मत्स्य विकास के लिए पात्र।',
  },
  {
    name: 'PM Jal Jeevan Mission',
    nameHi: 'पीएम जल जीवन मिशन',
    status: 'warning',
    reason: 'Limited water sources detected. May need additional groundwater assessment.',
    reasonHi: 'सीमित जल स्रोत का पता चला। अतिरिक्त भूजल मूल्यांकन की आवश्यकता हो सकती है।',
  },
  {
    name: 'Green India Mission (Afforestation)',
    nameHi: 'हरित भारत मिशन (वनीकरण)',
    status: 'eligible',
    reason: 'Degraded forest land detected (12 hectares). Eligible for afforestation support.',
    reasonHi: 'क्षतिग्रस्त वन भूमि का पता चला (12 हेक्टेयर)। वनीकरण सहायता के लिए पात्र।',
  },
  {
    name: 'PM Awas Yojana - Gramin',
    nameHi: 'पीएम आवास योजना - ग्रामीण',
    status: 'eligible',
    reason: 'Settlement areas identified. Housing support may be applicable.',
    reasonHi: 'बस्ती क्षेत्रों की पहचान की गई। आवास सहायता लागू हो सकती है।',
  },
];
