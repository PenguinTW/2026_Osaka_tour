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
              fileName: '1150419-送機訂單明細.pdf',
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
          transportInfo: {
            type: 'flight',
            details: [
              '航班：IT212 (tigersmart)',
              '座位：13E',
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
          description: '轉乘至長堀橋',
          transportInfo: {
            type: 'train',
            platforms: '1/2 號月台',
            details: [
              '途經：臨空城、發佐野',
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
          title: '心齋橋出發 前往京都',
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
          location: { name: '土井活鰻 伏見稻荷本店' }
        },
        {
          id: 'd2-4',
          title: '錦市場',
          location: { name: '錦市場' },
          details: ['必吃：玉子燒、豆乳甜甜圈']
        },
        {
          id: 'd2-5',
          title: '二年坂 / 三年坂 / 祇園白川',
          location: { name: '二年坂' }
        }
      ]
    },
    {
      day: 3,
      date: '2026-04-21 (二)',
      title: '市區歷史與夜景',
      items: [
        {
          id: 'd3-1',
          time: '上午',
          title: '大阪城公園',
          location: { name: '大阪城天守閣' },
          details: ['天守閣拍照、森之宮散步']
        },
        {
          id: 'd3-2',
          time: '12:00',
          title: '烈志笑魚油 麺香房 三く (午餐)',
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
          location: { name: '梅田藍天大廈' },
          vouchers: [
            {
              id: 'v2',
              title: '梅田藍天大廈門票',
              type: 'pdf',
              fileName: '0421梅田藍天大廈門票.pdf'
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
          title: '御堂筋線心齋橋 → 梅田',
          transportInfo: {
            type: 'train',
            details: ['往 新大阪/梅田方向', '車程約 10 分']
          }
        },
        {
          id: 'd4-3',
          time: '07:10',
          title: 'JR 大阪站 → 櫻島站',
          transportInfo: {
            type: 'train',
            details: ['JR 夢咲線', '往 桜島/Universal City 方向']
          }
        },
        {
          id: 'd4-4',
          time: '08:30',
          title: '抵達 USJ 準備入園',
          vouchers: [
            { id: 'usj-1', title: '0422環球入場', type: 'pdf', fileName: '0422環球入場.pdf' },
            { id: 'usj-2', title: '0422環球快速通關', type: 'pdf', fileName: '0422環球快速通關.pdf' },
            { id: 'usj-3', title: '0422環球餐券', type: 'pdf', fileName: '0422環球餐券.pdf' }
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
          id: 'd5-1',
          time: '12:00',
          title: '海遊館 入場',
          location: { name: '大阪海遊館' },
          vouchers: [
            { id: 'v5-1', title: '海遊館 憑證1', type: 'image', fileName: '海遊館_1.png' },
            { id: 'v5-2', title: '海遊館 憑證2', type: 'image', fileName: '海遊館_2.png' },
            { id: 'v5-3', title: '海遊館 門票', type: 'pdf', fileName: 'ticket.pdf' }
          ],
          details: ['12:00-12:15 入場', '14:20 企鵝餵食秀']
        },
        {
          id: 'd5-2',
          time: '下午',
          title: '天保山區觀光',
          details: ['大摩天輪', '聖瑪麗亞號 (無須預約)']
        },
        {
          id: 'd5-3',
          time: '19:00',
          title: '道頓堀遊艇',
          vouchers: [
            { id: 'v5-4', title: '19:00道頓堀遊船', type: 'pdf', fileName: '0423-1900道頓堀遊船.pdf' },
            { id: 'v5-5', title: '19:30道頓堀遊船', type: 'pdf', fileName: '0423-1930道頓堀遊船.pdf' }
          ],
          details: ['18:45 前取票']
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
          id: 'd6-1',
          title: '黑門市場 (早午餐)',
          location: { name: '黑門市場' },
          details: ['必吃：神戶牛、帆立貝']
        },
        {
          id: 'd6-2',
          title: '日本橋電器街',
          details: ['動漫、公仔、電玩']
        },
        {
          id: 'd6-3',
          title: '八阪神社 (獅子殿)',
          location: { name: '難波八阪神社' }
        },
        {
          id: 'd6-4',
          title: '千日前商店街',
          location: { name: '千日前' }
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
            { id: 'v8-1', title: '星宇回程資訊', type: 'image', fileName: 'image.png' }
          ]
        }
      ]
    }
  ]
};
