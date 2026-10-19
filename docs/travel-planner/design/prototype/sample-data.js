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
   P06-e 去掉楼外楼后：7+6+3 = 16 公里，花费去掉午餐 240–360。 */
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
    "d1.movedCost": "今天约 16 公里 · 花费 ¥890–1,170 参考",
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
    "xixi.reason": "从湖滨打车约 40 分钟、15 公里，适合单独排半天。"
  };
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
