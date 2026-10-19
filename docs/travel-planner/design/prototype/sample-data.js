/* Shared Hangzhou sample. Pages read these strings through data-qnw.
   Distances are rough road distances, not straight lines:
   湖滨 → 灵隐约 7 公里；灵隐 → 楼外楼（孤山）约 5 公里；
   楼外楼 → 白堤约 800 米；白堤 → 湖滨酒店约 3 公里；
   河坊街 → 中国美院南山约 1.5 公里；美院 → 湖滨码头约 2.5 公里。
   Day 1: 08:30 出发，+25 分到 09:00 灵隐（停 2 小时），
   +20 分到 11:30 楼外楼（停 1.5 小时），+12 分到 13:15 西湖（停 2 小时），
   +12 分到 15:30 入住。 */
(function () {
  var data = {
    "trip.title": "杭州两日游",
    "trip.when": "10/24–10/25 · 2 天 · 2 人",
    "trip.budgetLine": "10/24–10/25 · 2 人 · 预算 ¥2,100–2,900 参考 · 多云 22°",
    "budget.total": "预估 ¥2,100–2,900",
    "budget.per": "人均 ¥1,050–1,450 参考",
    "budget.traffic": "¥780–1,100 参考",
    "budget.stay": "¥680–860 参考",
    "budget.food": "¥480–720 参考",
    "budget.ticket": "¥140–220 参考",
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
    "d1.dayCost": "今天市内约 15 公里 · 花费 ¥980–1,400 参考",
    "home.nextLeg": "打车 25 分钟 · 7 公里 · 下一站灵隐寺",
    "pretrip.d1": "灵隐寺 · 楼外楼 · 西湖",
    "pretrip.d2": "河坊街 · 中国美术学院 · 西湖游船",
    "d2.chain": "河坊街 → 中国美术学院 → 西湖游船",
    "d1.movedLake": "11:22",
    "d1.lingyinToLake": "打车 22 分钟 · 6 公里",
    "ticket.lingyin": "门票 ¥45–75 参考",
    "food.price": "人均 ¥120–180 参考",
    "hotel.price": "每晚 ¥680–860 参考",
    "hotel.where": "距西湖游船码头约 3 公里，打车约 12 分钟"
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
