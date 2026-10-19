/* Shared Hangzhou sample. Pages read these strings through data-qnw.
   Distances are rough road distances, not straight lines:
   湖滨 → 灵隐约 7 公里；灵隐 → 楼外楼（孤山）约 5 公里；
   楼外楼 → 白堤约 800 米；白堤 → 湖滨酒店约 3 公里；
   河坊街 → 中国美院南山约 1.5 公里；美院 → 湖滨码头约 2.5 公里。
   Day 1: 08:30 出发，+25 分到 09:00 灵隐（停 2 小时），
   +20 分到 11:30 楼外楼（停 1.5 小时），+12 分到 13:15 西湖（停 2 小时），
   +12 分到 15:30 入住。
   Budget for 2 people. 分项 and 按天 both equal the total:
   交通 440–580 = 市内 160–220 + 往返高铁 280–360
   住宿 680–860，餐饮 440–640，门票 170–270，其他 50–100
   合计 1,780–2,450；人均为一半，890–1,225
   第 1 天 1,130–1,530 + 第 2 天 320–460 + 往返 280–360 + 其他 50–100 = 合计
   酒店在湖滨。到各点：灵隐 7、楼外楼 3.8、白堤 3、河坊街 1.6、美院 3.1、
   游船码头 1（同在湖滨），平均 3.3 公里。
   P06-e 去掉楼外楼后：7+6+3 = 16 公里，花费去掉午餐 240–360。
   原型里的今天是 10/21。出行中是厦门三日游第 2 天，下一站南普陀。
   杭州两日游在 10/24–10/25，还有 3 天，不算今天。
   现在是 9:41。第 2 天 09:55 才从中山路出发（约 15 分钟后），尚未完成。
   中山路 → 南普陀约 4 公里、15 分钟，10:10 到，停 1.5 小时到 11:40。
   南普陀紧挨厦大南门，步行 8 分钟、约 600 米，11:48 到，再停 1.5 小时到 13:18。
   厦大 → 曾厝垵约 2.5 公里、10 分钟，13:28 到，午餐 1.5 小时到 14:58。
   曾厝垵沿环岛路回中山路约 7 公里、20 分钟，15:18 到酒店。当天约 14 公里。
   第 1 天鼓浪屿：轮渡、日光岩、菽庄花园。第 3 天：环岛路、植物园、中山路。
   可离线的是厦门、杭州两日游、杭州周末这三趟已保存行程；
   成都草稿未保存。未登录只缓存本地那一趟杭州。
   成都草稿排在 11/6–11/9，避免和这两趟重叠。 */
(function () {
  var data = {
    "trip.title": "杭州两日游",
    "trip.when": "10/24–10/25 · 2 天 · 2 人",
    "trip.budgetLine": "10/24–10/25 · 2 人 · 预算 ¥1,780–2,450 参考 · 多云 22°",
    "budget.home": "预算 ¥1,780–2,450 参考",
    "budget.tripShort": "10/24–10/25 · 2 人 · 预算 ¥1,780–2,450 参考",
    "budget.total": "预估 ¥1,780–2,450",
    "budget.per": "人均 ¥890–1,225 参考",
    "budget.traffic": "¥440–580 参考",
    "budget.stay": "¥680–860 参考",
    "budget.food": "¥440–640 参考",
    "budget.ticket": "¥170–270 参考",
    "budget.other": "¥50–100 参考",
    "budget.day1": "第 1 天 · ¥1,130–1,530 参考",
    "budget.day2": "第 2 天 · ¥320–460 参考",
    "budget.rail": "往返交通 · ¥280–360 参考",
    "budget.otherLine": "其他 · ¥50–100 参考",
    "budget.floor": "≥ ¥1,730",
    "budget.floorPer": "人均至少 ¥865 参考 · 不含未知项",
    "source": "数据来源：高德 · 更新于 2026-10-19",
    "d1.hours": "第 1 天 · 约 7 小时",
    "d1.depart": "08:30",
    "d1.toLingyin": "打车 25 分钟 · 7 公里",
    "d1.lingyin": "09:00",
    "d1.lingyinStay": "景点 · 建议停留 2 小时",
    "d1.toLou": "打车 20 分钟 · 5 公里",
    "d1.lou": "11:30",
    "d1.louStay": "餐饮 · 建议停留 1.5 小时 · 人均 ¥120–180 参考",
    "d1.toLake": "步行 12 分钟 · 800 米",
    "d1.lake": "13:15",
    "d1.lakeStay": "景点 · 建议停留 2 小时",
    "d1.toHotel": "打车 12 分钟 · 3 公里",
    "d1.hotel": "15:30",
    "d1.hotelStay": "住宿 · 每晚 ¥680–860 参考",
    "d1.dayCost": "今天约 15 公里 · 花费 ¥1,130–1,530 参考",
    "d1.planCost": "这一天约 15 公里 · 花费 ¥1,130–1,530 参考",
    "d1.movedCost": "这一天约 16 公里 · 花费 ¥890–1,170 参考",
    "home.nextLeg": "打车 25 分钟 · 7 公里 · 下一站灵隐寺",
    "pretrip.d1": "灵隐寺 · 楼外楼 · 西湖",
    "pretrip.d2": "河坊街 · 中国美术学院 · 西湖游船",
    "d2.chain": "河坊街 → 中国美术学院 → 西湖游船",
    "d2.morning": "第二天从酒店步行 22 分钟 · 1.6 公里",
    "d2.plan": "10:00 河坊街 → 13:00 中国美术学院 → 16:00 西湖游船",
    "d2.hefang": "10:00",
    "d2.toMeiyuan": "步行 20 分钟 · 1.5 公里",
    "d2.meiyuan": "13:00",
    "d2.toBoat": "打车 12 分钟 · 2.5 公里",
    "d2.boat": "16:00",
    "d1.movedLake": "11:22",
    "d1.lingyinToLake": "打车 22 分钟 · 6 公里",
    "ticket.lingyin": "门票 ¥45–75 参考",
    "food.price": "人均 ¥120–180 参考",
    "hotel.price": "每晚 ¥680–860 参考",
    "hotel.where": "距行程各点平均约 3.3 公里",
    "hotel.pros": "优点：靠湖滨，第二天去河坊街步行约 22 分钟",
    "hotel.cons": "缺点：景区门口，夜间比较热闹",
    "lingyin.addr": "杭州市西湖区法云弄 1 号",
    "lingyin.phone": "0571-87968665",
    "lou.addr": "杭州市西湖区孤山路 30 号",
    "lou.phone": "0571-87969023",
    "lou.queue": "午市通常排队 20–40 分钟",
    "hotel.addr": "杭州市上城区湖滨路",
    "hotel.phone": "0571-87028888",
    "xixi.ticket": "门票 ¥70–90 参考",
    "xixi.addr": "杭州市西湖区天目山路 518 号",
    "xixi.phone": "0571-88106696",
    "xixi.reason": "从湖滨打车约 40 分钟、15 公里，适合单独排半天。",
    "hz.title": "杭州两日游",
    "hz.status": "3 天后出发",
    "hz.meta": "杭州 · 10/24–10/25 · 2 天 · 可离线看",
    "xm.title": "厦门三日游",
    "xm.status": "出行中",
    "xm.when": "厦门 · 10/20–10/22 · 3 天 · 可离线看",
    "xm.next": "今天第 2 天 · 下一站南普陀",
    "xm.budgetLine": "10/20–10/22 · 2 人 · 今天第 2 天 · 多云 26°",
    "xm.homeDate": "10月21日 · 厦门 · 多云 26°",
    "xm.homeTitle": "厦门三日游 · 第 2 天",
    "xm.departIn": "15 分钟",
    "xm.nextWhen": "下一站 · 10:10",
    "xm.nextName": "南普陀寺",
    "xm.nextStay": "建议 1.5 小时",
    "xm.homeLeg": "打车 15 分钟 · 约 4 公里 · 下一站南普陀寺",
    "xm.departAt": "09:55",
    "xm.departMeta": "15 分钟后出发 · 中山路",
    "xm.t.temple": "10:10",
    "xm.t.uni": "11:48",
    "xm.t.zeng": "13:28",
    "xm.t.hotel": "15:18",
    "xm.toTemple": "打车 15 分钟 · 约 4 公里",
    "xm.toUni": "步行 8 分钟 · 约 600 米",
    "xm.toZeng": "打车 10 分钟 · 约 2.5 公里",
    "xm.toHotel": "打车 20 分钟 · 约 7 公里",
    "xm.dayCost": "今天约 14 公里 · 花费 ¥160–260 参考",
    "xm.d1.date": "10/20 周二",
    "xm.d2.date": "10/21 周三",
    "xm.d3.date": "10/22 周四",
    "xm.d1.fold": "鼓浪屿 · 轮渡 → 日光岩 → 菽庄花园",
    "xm.d3.fold": "环岛路 · 植物园 → 中山路",
    "xm.lunch": "餐饮 · 人均 ¥60–90 参考",
    "xm.addr": "厦门市思明区思明南路 515 号",
    "done.title": "杭州周末",
    "done.status": "已完成",
    "done.meta": "杭州 · 9/20–9/21 · 2 天 · 可离线看",
    "done.line": "9/20–9/21 · 已完成 · 只能查看",
    "done.d1": "9/20 周日 · 断桥 → 白堤 → 楼外楼",
    "done.d2": "9/21 周一 · 灵隐寺 → 飞来峰",
    "draft.title": "成都美食",
    "draft.status": "草稿",
    "draft.meta": "成都 · 11/6–11/9 · 4 天 · 还没保存",
    "local.title": "杭州两日游",
    "local.status": "本地草稿",
    "local.meta": "未登录 · 10/24–10/25 · 2 天 · 可离线看",
    "profile.trips": "已规划 3 趟 · 去过 1 座城市",
    "profile.name": "旅行者",
    "profile.companion": "同行人 · 和朋友",
    "profile.offline": "",
    "profile.offlineGuest": "",
    "budget.share": "预估 ¥1,780–2,450 参考",
    "lake.addr": "杭州市西湖区白堤",
    "lake.phone": "0571-87179617",
    "lake.ticket": "免门票",
    "lake.hours": "全天开放 · 白堤",
    "lake.reason": "从楼外楼沿白堤步行约 12 分钟、800 米。"
  };
  function offlineCount(keys) {
    var n = 0;
    keys.forEach(function (key) {
      if (String(data[key] || "").indexOf("可离线看") !== -1) n += 1;
    });
    return n;
  }
  data["profile.offline"] = "已缓存 " + offlineCount(["hz.meta", "xm.when", "done.meta"]) + " 趟行程";
  data["profile.offlineGuest"] = "已缓存 " + offlineCount(["local.meta"]) + " 趟 · 只在这台手机";
  window.QNW = data;
  function fill() {
    document.querySelectorAll("[data-qnw]").forEach(function (el) {
      var value = data[el.getAttribute("data-qnw")];
      if (value != null) el.textContent = value;
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill);
  else fill();
})();
