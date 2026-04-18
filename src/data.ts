/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TripData } from './types.ts';

export const TRIP_DATA: TripData = {
  hotel: {
    name: 'Vessel Inn Shinsaibashi',
    googleMapUrl: 'https://maps.app.goo.gl/f3a1Ld6NbGn11ZBj9',
    address: 'Osaka, Chuo Ward, Minamisenba, 2 Chome−12−11'
  },
  days: [
    {
      day: 1,
      date: '2026-04-19 (日)',
      title: '出發前往大阪',
      items: [
        {
          id: 'd1-1',
          time: '10:00',
          title: '前往桃園機場—機場接送',
          location: { name: '桃園國際機場', googleMapUrl: 'https://maps.app.goo.gl/TPE' },
          vouchers: [
            {
              id: 'v1',
              title: '送機訂單明細',
              type: 'pdf',
              userId: 0,
              fileName: '1150419-0-送機訂單明細.pdf',
              orderNumber: 'YM6777',
              previewUrl: 'https://drive.google.com/file/d/1uk3RYU7NCf8_hGJN4QpI4z7JKm2ycKLw/preview'
            }
          ],
          details: [
            '訂車平台：機場快綫 (airportfrstcar.com)',
            '付款方式：信用卡 (已付款)',
            '訂單金額：$799'
          ]
        },
        {
          id: 'd1-2',
          time: '12:00',
          title: '抵達桃園機場報到',
          description: '1航廈, 報到櫃檯：7號',
          vouchers: [
            {
              id: 'v1-2-1',
              title: '虎航報到通知單',
              type: 'pdf',
              userId: 1,
              fileName: '1150419-1-虎航報到通知單.pdf',
              previewUrl: 'https://drive.google.com/file/d/1sncCM6bjEqJuNuJKtDZ7Hn9LlkuG64Y8/preview'
            },
            {
              id: 'v1-2-2',
              title: '虎航報到通知單',
              type: 'pdf',
              userId: 2,
              fileName: '1150419-2-虎航報到通知單.pdf',
              previewUrl: 'https://drive.google.com/file/d/1M-r7fTKciMIxQtk3BoMbyVhfTmornp3O/preview'
            }
          ],
          transportInfo: {
            type: 'flight',
            details: [
              '航班：IT212 (tigersmart)',
              '座位：13E、13D',
              '託運行李：20 公斤'
            ]
          }
        },
        {
          id: 'd1-3',
          time: '14:20',
          title: '起飛 (TPE → KIX)',
          description: '預計 18:00 抵達'
        },
        {
          id: 'd1-4',
          time: '19:00',
          title: '搭乘 Rapi:t 前往天下茶屋',
          link: 'https://japantravel.go.link/e3KWH',
          description: '入境後前往南海電鐵月台',
          vouchers: [
            {
              id: 'v1-4-1',
              title: 'Rapi:t 憑證 1',
              type: 'pdf',
              userId: 1,
              fileName: 'Rapi:t-Coupon-1',
              previewUrl: 'http://linkt.to/S3uZrUM7'
            },
            {
              id: 'v1-4-2',
              title: 'Rapi:t 憑證 2',
              type: 'pdf',
              userId: 2,
              fileName: 'Rapi:t-Coupon-2',
              previewUrl: 'http://linkt.to/S3wpJdVf'
            }
          ],
          transportInfo: {
            type: 'train',
            platforms: '1/2 號月台',
            details: [
              '總共三站，途經：臨空城、泉佐野',
              '天下茶屋站下車'
            ]
          }
        },
        {
          id: 'd1-5',
          time: '19:50',
          title: '轉乘 Osaka Metro 堺筋線',
          transportInfo: {
            type: 'train',
            platforms: '2/3 號月台 (天下茶屋)',
            details: [
              '往 北千里方向',
              '途經：動物園前、惠美須町、日本橋',
              '長堀橋站下車',
              '出口：2-B (電梯) 或 7 號出口'
            ]
          }
        },
        {
          id: 'd1-6',
          title: '飯店 Check-in & 晚餐',
          location: {
            name: 'Vessel Inn Shinsaibashi',
            googleMapUrl: 'https://maps.app.goo.gl/f3a1Ld6NbGn11ZBj9'
          }
        }
      ]
    },
    {
      day: 2,
      date: '2026-04-20 (一)',
      title: '京都文化之旅',
      items: [
        {
          id: 'd2-1',
          title: '心齋橋站出發 前往京都',
          link: 'https://japantravel.go.link/85yJf',
          transportInfo: {
            type: 'train',
            details: ['前往伏見稻荷大社']
          }
        },
        {
          id: 'd2-2',
          title: '伏見稻荷大社',
          location: { name: '伏見稻荷大社' },
          details: ['參訪千本鳥居']
        },
        {
          id: 'd2-3',
          title: '土井活鰻 伏見稻荷本店 (午餐)',
          location: { 
            name: '土井活鰻 伏見稻荷本店',
            googleMapUrl: 'https://maps.app.goo.gl/KUjDnkwK8bYjBgBD7'
          }
        },
        {
          id: 'd2-4',
          title: '錦市場',
          link: 'https://japantravel.go.link/4pPH4',
          location: { name: '錦市場' },
          details: ['必吃：玉子燒、豆乳甜甜圈']
        },
        {
          id: 'd2-5',
          title: '二年坂 / 三年坂',
          location: { name: '二年坂' }
        },
        {
          id: 'd2-6',
          title: '祇園白川',
          location: { 
            name: '祇園白川',
            googleMapUrl: 'https://maps.app.goo.gl/VjpwkAzn7t8aMKFw8'
          }
        },
        {
          id: 'd2-7',
          title: '返回心齋橋',
          transportInfo: {
            type: 'train',
            details: ['京都 → 大阪']
          }
        }
      ]
    },
    {
      day: 3,
      date: '2026-04-21 (二)',
      title: '市區歷史',
      items: [
        {
          id: 'd3-0',
          time: '上午',
          title: '長堀橋站出發',
          transportInfo: {
            type: 'train',
            details: ['長堀橋站 → 天滿橋站']
          }
        },
        {
          id: 'd3-1',
          time: '上午',
          title: '大阪城公園',
          link: 'https://japantravel.go.link/40c22',
          location: { name: '大阪城天守閣' },
          details: ['天守閣拍照、森之宮散步']
        },
        {
          id: 'd3-2',
          time: '12:00',
          title: '烈志笑魚油 麺香房 三く (午餐)',
          link: 'https://japantravel.go.link/1LeWl',
          location: { name: '三く拉麵', googleMapUrl: 'https://maps.app.goo.gl/qiBVcDo4CYvi84sK8' }
        },
        {
          id: 'd3-3',
          time: '下午',
          title: '梅田區逛街',
          location: { name: '大丸梅田 / LUCUA' }
        },
        {
          id: 'd3-4',
          time: '傍晚',
          title: '梅田藍天大廈看夜景',
          location: { 
            name: '梅田藍天大廈',
            googleMapUrl: 'https://maps.app.goo.gl/wWATTwqCKoZXLX5G6'
          },
          vouchers: [
            {
              id: 'v2-0',
              title: '梅田藍天大廈門票',
              type: 'pdf',
              userId: 0,
              fileName: '1150421-0-梅田藍天大廈門票.pdf',
              previewUrl: 'https://drive.google.com/file/d/1prDH5ecKfnuTtR00PQA2UEvzGJjh6Ld_/preview'
            },
            {
              id: 'v2-1',
              title: '梅田藍天大廈門票',
              type: 'pdf',
              userId: 1,
              fileName: '1150421-1-梅田藍天大廈門票.pdf',
              previewUrl: 'https://drive.google.com/file/d/1Q5AYuP-Z2KXcsEmLoasuCCefk1AawiJ-/preview'
            },
            {
              id: 'v2-2',
              title: '梅田藍天大廈門票',
              type: 'pdf',
              userId: 2,
              fileName: '1150421-2-梅田藍天大廈門票.pdf',
              previewUrl: 'https://drive.google.com/file/d/18H228s3xCkI9pUS_9LpwWpR1j6RNF59U/preview'
            }
          ]
        }
      ]
    },
    {
      day: 4,
      date: '2026-04-22 (三)',
      title: 'USJ 全日狂歡',
      items: [
        {
          id: 'd4-1',
          time: '06:40',
          title: '飯店出發 → 心齋橋站',
          transportInfo: {
            type: 'walk',
            details: ['步行 5–8 分', '建議入口：北改札 / 2 號或 6 號出口']
          }
        },
        {
          id: 'd4-2',
          time: '06:50',
          title: '下樓搭車：心齋橋 → USJ',
          link: 'https://japantravel.go.link/k9h21',
          transportInfo: {
            type: 'train',
            details: ['御堂筋線往梅田', '轉乘 JR 往 Universal City']
          }
        },
        {
          id: 'd4-4',
          time: '08:30',
          title: '環球影城 入場',
          vouchers: [
            { 
              id: 'usj-1', 
              title: '環球入場券', 
              type: 'pdf', 
              userId: 1, 
              fileName: '1150422-1-環球入場.pdf',
              previewUrl: 'https://drive.google.com/file/d/1ogbbn3TQLAZDhuiLuharkqPRYrWS40WQ/preview'
            },
            { 
              id: 'usj-1-u2', 
              title: '環球入場券', 
              type: 'pdf', 
              userId: 2, 
              fileName: '1150422-2-環球入場.pdf',
              previewUrl: 'https://drive.google.com/file/d/16SW9-FCBPLoMMYGVfkGPQ0MhWlS2T5NA/preview'
            },
            { 
              id: 'usj-3', 
              title: '環球餐券', 
              type: 'pdf', 
              userId: 0, 
              fileName: '1150422-0-環球餐券.pdf',
              previewUrl: 'https://drive.google.com/file/d/1rMfQg-E9WvE3JttiDxPkGJl7HXg63oVx/preview'
            }
          ]
        },
        {
          id: 'd4-4b',
          time: '08:30',
          title: '環球影城 快速通關',
          vouchers: [
            { 
              id: 'usj-2-u1', 
              title: '環球快速通關', 
              type: 'pdf', 
              userId: 1, 
              fileName: '1150422-1-環球快速通關.pdf',
              previewUrl: 'https://drive.google.com/file/d/1jJ379-spy7HtYfRA6fTNT7IerIlOy_9U/preview'
            },
            { 
              id: 'usj-2', 
              title: '環球快速通關', 
              type: 'pdf', 
              userId: 2, 
              fileName: '1150422-2-環球快速通關.pdf',
              previewUrl: 'https://drive.google.com/file/d/1scyeSnGp0aAmFni689eQkYPpVj-1hE7S/preview'
            }
          ]
        },
        {
          id: 'd4-5',
          time: '10:30',
          title: '瑪利歐賽車：庫巴的挑戰書',
          description: '超級任天堂世界 (快速通關 10:40-11:10)'
        },
        {
          id: 'd4-6',
          time: '11:00',
          title: '奇諾比奧咖啡廳 (午餐)',
          description: '超級任天堂世界'
        },
        {
          id: 'd4-7',
          time: '14:30',
          title: '水世界表演秀',
          description: '提早入場卡位'
        },
        {
          id: 'd4-8',
          time: '15:30',
          title: '太空幻想列車',
          description: '快速通關 (Anytime)'
        },
        {
          id: 'd4-9',
          time: '17:30',
          title: '逆轉世界雲霄飛車',
          description: '快速通關 (17:50-18:20)'
        },
        {
          id: 'd4-10',
          time: '18:30',
          title: '哈利波特魔法世界',
          description: '夜景 + 禁忌之旅'
        },
        {
          id: 'd4-11',
          time: '21:30',
          title: 'YAKINIKUEN 忍鬨 (晚餐)',
          link: 'https://japantravel.go.link/fBCxq',
          location: { name: '燒肉 忍鬨', googleMapUrl: 'https://maps.app.goo.gl/UERHfvhJxf1kCTEQ8' }
        }
      ]
    },
  {
    day: 5,
    date: '2026-04-23 (四)',
    title: '海灣風情與遊船',
    items: [
      {
        id: 'd5-tickets',
        time: '全日',
        title: '當日通行：大阪周遊卡',
        vouchers: [
          {
            id: 'v5-p1',
            title: '大阪周遊卡 1',
            type: 'pdf',
            userId: 1,
            fileName: 'Osaka-Pass-1',
            previewUrl: 'http://linkt.to/X4RhMxd5'
          },
          {
            id: 'v5-p2',
            title: '大阪周遊卡 2',
            type: 'pdf',
            userId: 2,
            fileName: 'Osaka-Pass-2',
            previewUrl: 'http://linkt.to/X8fSujL1'
          }
        ],
        details: ['設施內免費入場憑證', '全日無限次搭乘地鐵']
      },
      {
        id: 'd5-0',
        time: '10:00',
        title: '飯店出發 / 早餐 Time',
        transportInfo: { type: 'walk', details: ['自由享用早午餐'] }
      },
      {
        id: 'd5-0b',
        time: '11:20',
        title: '前往海遊館',
        link: 'https://japantravel.go.link/jPPa7',
        transportInfo: { type: 'train', details: ['前往 大阪港站', '車程約 30-40 分'] }
      },
      {
        id: 'd5-1',
        time: '12:00',
        title: '海遊館 入場',
        location: { name: '大阪海遊館' },
        vouchers: [
          { 
            id: 'v5-1', 
            title: '海遊館 門票', 
            type: 'pdf', 
            userId: 1, 
            fileName: '1150423-1-海遊館.pdf',
            previewUrl: 'https://drive.google.com/file/d/12mNo5wX-8SRd_UnCTGiwpOptiqie8iTj/preview'
          },
          { 
            id: 'v5-1-u2', 
            title: '海遊館 門票', 
            type: 'pdf', 
            userId: 2, 
            fileName: '1150423-2-海遊館.pdf',
            previewUrl: 'https://drive.google.com/file/d/1iBD3up6uS_4bS9qritVERG39He6OOcKE/preview'
          }
        ],
        details: ['12:00–14:30 參觀', '14:20 企鵝餵食秀']
      },
      {
        id: 'd5-2',
        time: '14:30',
        title: '天保山區觀光',
        details: [
          '大摩天輪 / 市場廣場',
          '聖瑪麗亞號：直接至乘船點 (無須預約)',
          '白天整點發船 (45分) / 黃昏 18:30 (60分)'
        ]
      },
      {
        id: 'd5-2b',
        time: '18:10',
        title: '回市區',
        link: 'https://japantravel.go.link/99KRL',
        transportInfo: { type: 'train', details: ['大阪港站 → 市區'] }
      },
      {
        id: 'd5-3',
        time: '19:00',
        title: '道頓堀遊艇',
        vouchers: [
          { 
            id: 'v5-4', 
            title: '19:00道頓堀遊船', 
            type: 'pdf', 
            userId: 1, 
            fileName: '1150423-1-1900道頓堀遊船.pdf',
            previewUrl: 'https://drive.google.com/file/d/1aJz06JAfIR0rVPC7ulQPZqDgUSGhylLp/preview'
          },
          { 
            id: 'v5-5', 
            title: '19:30道頓堀遊船', 
            type: 'pdf', 
            userId: 2, 
            fileName: '1150423-2-1930道頓堀遊船.pdf',
            previewUrl: 'https://drive.google.com/file/d/1GGFFYezC_xR5HCF1KH4SpkLdTiBm3Tu3/preview'
          }
        ],
        details: ['18:45-19:00 取票', '19:00-19:30 遊船']
      },
      {
        id: 'd5-4',
        time: '20:00',
        title: 'Tanuki Chaya 爐端燒 (晚餐)',
        location: { name: 'Tanuki Chaya', googleMapUrl: 'https://maps.app.goo.gl/kVKug17pU37MbU4i9' }
      }
    ],
      notes: '今日交通車資約 ¥560'
    },
    {
      day: 6,
      date: '2026-04-24 (五)',
      title: '在地文化與黑門市場',
      items: [
        {
          id: 'd6-0',
          time: '早上',
          title: '飯店出發',
          transportInfo: { type: 'walk', details: ['輕鬆慢遊'] }
        },
        {
          id: 'd6-1',
          title: '黑門市場',
          location: { name: '黑門市場', googleMapUrl: 'https://maps.app.goo.gl/dtJPc5XThWiWscKg7' },
          details: ['早午餐首選：神戶牛、帆立貝']
        },
        {
          id: 'd6-2',
          title: '日本橋電器街',
          location: { name: '日本橋電器街', googleMapUrl: 'https://maps.app.goo.gl/LkFVapwMLgsjyK576' },
          details: ['動漫、公仔、電玩天地']
        },
        {
          id: 'd6-3',
          title: '八阪神社 (獅子殿)',
          location: { name: '難波八阪神社', googleMapUrl: 'https://maps.app.goo.gl/cSaFYhF8bw9ab9Xn8' }
        },
        {
          id: 'd6-4',
          title: '千日前商店街',
          location: { name: '千日前商店街', googleMapUrl: 'https://maps.app.goo.gl/wrwutUe4NvtoivVb8' }
        },
        {
          id: 'd6-5',
          time: '19:30',
          title: '壽喜燒 Shabuwara (晚餐)',
          location: { name: 'Shabuwara', googleMapUrl: 'https://maps.app.goo.gl/AmqYztGbP1JsD1Y57' }
        }
      ]
    },
    {
      day: 7,
      date: '2026-04-25 (六)',
      title: '預留彈性日',
      items: [
        {
          id: 'd7-1',
          title: '自由安排行程',
          description: '購物行程補遺或休息'
        }
      ]
    },
    {
      day: 8,
      date: '2026-04-26 (日)',
      title: '最後衝刺與回程',
      items: [
        {
          id: 'd8-1',
          time: '上午',
          title: '難波最後補貨',
          description: '飯店豪華早餐 + 難波購物'
        },
        {
          id: 'd8-2',
          time: '12:00',
          title: '搭乘 Rapi:t 前往關西機場',
          vouchers: [
            {
              id: 'v8-2-1',
              title: 'Rapi:t 憑證 1',
              type: 'pdf',
              userId: 1,
              fileName: 'Rapi:t-Return-1',
              previewUrl: 'http://linkt.to/EY4erEG1'
            },
            {
              id: 'v8-2-2',
              title: 'Rapi:t 憑證 2',
              type: 'pdf',
              userId: 2,
              fileName: 'Rapi:t-Return-2',
              previewUrl: 'http://linkt.to/EXSJRKvs'
            }
          ],
          transportInfo: {
            type: 'train',
            details: ['前往機場進行免稅店購物']
          }
        },
        {
          id: 'd8-3',
          time: '15:10',
          title: '星宇航空 JX823 起飛',
          transportInfo: {
            type: 'flight',
            details: [
              '出發：KIX Terminal 1 15:10',
              '抵達：TPE Terminal 1 17:05',
              '座位：40J',
              '行李：1 件 / 23 公斤'
            ]
          },
          vouchers: [
            { id: 'v8-1', title: '星宇回程資訊', type: 'image', userId: 0, fileName: '1150426-0-image.png' }
          ]
        }
      ]
    }
  ]
};
