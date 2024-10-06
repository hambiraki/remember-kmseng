
new Vue({
  el: '#mainTabs',
  data: {
    current: 1
  },
  methods: {
    active: function (id) {
      return this.current == id
    },
    changeTab: function (id) {
      this.current = id
      setTimeout(this.setTableSorter, 10);
    },
    setTableSorter: function () {
      switch (this.current) {
        case 1:
        case 2:
        case 3:
        case 4:
          $("#weponMainsTableType" + this.current).tablesorter();
          $("#weponSubsTableType" + this.current).tablesorter();
          $("#weponAuxiliarysTableType" + this.current).tablesorter();
          $("#weponSpecialsTableType" + this.current).tablesorter();
          break;
        case 5: $("#partsHeadsTable").tablesorter(); break;
        case 6: $("#partsBodysTable").tablesorter(); break;
        case 7: $("#partsArmsTable").tablesorter(); break;
        case 8: $("#partsLegsTable").tablesorter(); break;
      }
    },
    setFilter: function () {
      let filters = [];
      let items;

      switch (this.current) {
        case 5:

          filters = [
            [document.getElementById("phw-min").value, document.getElementById("phw-max").value], // 重量
            [document.getElementById("phs-min").value, document.getElementById("phs-max").value], // スロ
            [document.getElementById("pha-min").value, document.getElementById("pha-max").value], // 装甲
            [document.getElementById("phc-min").value, document.getElementById("phc-max").value], // 射撃補正
            [document.getElementById("phse-min").value, document.getElementById("phse-max").value], // 索敵
            [document.getElementById("phr-min").value, document.getElementById("phr-max").value], // ロック
            [document.getElementById("phd-min").value, document.getElementById("phd-max").value], // DEF回復
          ]
          items = document.getElementById("partsHeadsTableBody").childNodes
          break;
        case 6:
          filters = [
            [document.getElementById("pbw-min").value, document.getElementById("pbw-max").value], // 重量
            [document.getElementById("pbs-min").value, document.getElementById("pbs-max").value], // スロ
            [document.getElementById("pba-min").value, document.getElementById("pba-max").value], // 装甲
            [document.getElementById("pbb-min").value, document.getElementById("pbb-max").value], // 出力
            [document.getElementById("pbsp-min").value, document.getElementById("pbsp-max").value], // SP
            [document.getElementById("pbar-min").value, document.getElementById("pbar-max").value], // エリア移動
            [document.getElementById("pbd-min").value, document.getElementById("pbd-max").value], // DEF
          ]

          items = document.getElementById("partsBodysTableBody").childNodes
          break;
        case 7:
          filters = [
            [document.getElementById("paw-min").value, document.getElementById("paw-max").value], // 重量
            [document.getElementById("pas-min").value, document.getElementById("pas-max").value], // スロ
            [document.getElementById("paa-min").value, document.getElementById("paa-max").value], // 装甲
            [document.getElementById("par-min").value, document.getElementById("par-max").value], // 反動
            [document.getElementById("pare-min").value, document.getElementById("pare-max").value], // リロ
            [document.getElementById("pasw-min").value, document.getElementById("pasw-max").value], // 武器変更
            [document.getElementById("paam-min").value, document.getElementById("paam-max").value], // 予備弾数
          ]
          items = document.getElementById("partsArmsTableBody").childNodes
          break;
        case 8:
          filters = [
            [document.getElementById("plw-min").value, document.getElementById("plw-max").value], // 重量
            [document.getElementById("pls-min").value, document.getElementById("pls-max").value], // スロ
            [document.getElementById("pla-min").value, document.getElementById("pla-max").value], // 装甲
            [document.getElementById("plw-min").value, document.getElementById("plw-max").value], // 歩行
            [document.getElementById("pld-min").value, document.getElementById("pld-max").value], // 走行
            [document.getElementById("plc-min").value, document.getElementById("plc-max").value], // 巡航
            [document.getElementById("plca-min").value, document.getElementById("plca-max").value], // 積載
          ]

          items = document.getElementById("partsLegsTableBody").childNodes
          break;
        default: alert("フィルター機能はパーツセクションのみ有効です。"); return;
      }


      for (let i = 0; i < items.length; i++) {
        let itemElement = items.item(i)
        let itemValues = itemElement.childNodes
        if (itemValues.length == 0) {
          continue
        }

        let values = [];
        for (let j = 0; j < itemValues.length; j++) {
          if (itemValues.item(j).innerHTML !== undefined) {
            values.push(itemValues.item(j).innerHTML)
          }
        }
        values.shift();

        let isValidateOk = true
        for (let j = 0; j < values.length; j++) {
          let value = parseFloat(values[j])
          let min = filters[j][0] ? parseFloat( filters[j][0] ) : -99999.0
          let max = filters[j][1] ? parseFloat( filters[j][1] ) : 99999.0

          if (value < min || max < value) {
            isValidateOk = false
          }
        }
        try {
          if (isValidateOk) {
            itemElement.style.display = "";
          } else {
            itemElement.style.display = "none"
          }
        } catch (e) {
        }
      }
    }
  }
})

$("#weponMainsTableType1").tablesorter();
$("#weponSubsTableType1").tablesorter();
$("#weponAuxiliarysTableType1").tablesorter();
$("#weponSpecialsTableType1").tablesorter(); 
