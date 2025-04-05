
    function getMonthsAndDaysDiff(FROM, TO) {
      const start = new Date(FROM);
      const end = new Date(TO);

      if (end < start) {
        [start, end] = [end, start];
      }

      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();
      

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += prevMonth.getDate();
      }
      

      months += years * 12;

      return { months, days};
    }

    function calculate() {
      var PM = parseFloat(document.getElementById("pm1").value);
      var IR = parseFloat(document.getElementById("ir1").value);
      var FROM = document.getElementById("from1").value;
      var TO = document.getElementById("to1").value;

      const diff = getMonthsAndDaysDiff(FROM, TO);
      const fm = diff.months;
      const fd = diff.days;
      const y=Math.floor(fm/12);
      const m=fm%12;    

      const hun = PM / 100;
      const rm = hun * IR;             
      const rd = rm / 30;                

      const im = fm * rm;                
      const id = fd * rd;                

      const fi = im + id;               
      const tam1 = PM + fi;         
      const td= ` ${y} y ${m} m ${fd} d`;  
      document.getElementById("pm").innerText = PM
      document.getElementById("ir").innerText = IR
      document.getElementById("from").innerText = FROM;
      document.getElementById("to").innerText = TO;
     document.getElementById("time").innerText = td;   
      document.getElementById("in").innerText = fi.toFixed(2);
      document.getElementById("tam").innerText = tam1.toFixed(2);


document.getElementById("result").style.display = "table";


 }

function resetForm() {
   
      document.getElementById("pm1").value = "";
      document.getElementById("ir1").value = "";
      document.getElementById("from1").value = "";
      document.getElementById("to1").value = "";
      document.getElementById("result").style.display = "none";


}
