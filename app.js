window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("dislogo");
    }, 4000);
  };
const numS = document.querySelectorAll(".number");
const eq = document.querySelector('.eq');
const oprS = document.querySelectorAll('.opr');
const clear = document.querySelector('.CE');
const clearAll = document.querySelector('.clear');
const dis1 = document.querySelector('.dis-1');
const dis2 = document.querySelector(".dis-2");
const dis3 = document.querySelector('.dis-3');
let dis1num = "";
let dis2num = "";
let last = "";
let result = null;
let haveDot = false;
let dot = '.';


numS.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (e.target.innerText === "." && !haveDot) {
        haveDot = true;
      } else if (e.target.innerText === "." && haveDot) {
        return;
      }
      dis2num += e.target.innerText;
      dis2.innerText = dis2num;
      // console.log();
    });
  });
  oprS.forEach((opr) => {
          opr.addEventListener('click', (e) => {
              if(!dis2num) return;
              haveDot = false;
              const oprName = e.target.innerText;
              if (dis1num && dis2num && last) {
                  mathOperation();
              }else {
                  result = parseFloat(dis2num);
              }
              clearVar(oprName);
              last = oprName;
              console.log(result);
          });
      });
      function clearVar(name = ''){
          dis1num += dis2num+ ' ' + name + ' '; 
          dis1.innerText = dis1num;
          dis2.innerText = '';
          dis2num = '';
          dis3.innerText = result;
        }
        function mathOperation() {
            if (last === 'x'){
                result = parseFloat(result) * parseFloat(dis2num);
            } else if (last === '+'){
                result = parseFloat(result) + parseFloat(dis2num);
            }else if (last === '-'){
                result = parseFloat(result) - parseFloat(dis2num);
            }else if (last === '/'){
                result = parseFloat(result) / parseFloat(dis2num);
            }else if (last === '%'){
                result = parseFloat(result) % parseFloat(dis2num);
            }
        }
        eq.addEventListener('click',(e) =>{
            if(!dis1num || !dis2num) return;
            haveDot = false;
            mathOperation();
            clearVar();
            dis2.innerText = result;
            dis3.innerText = '';
            dis2num = result;
            dis1num = '';
        })
        clearAll.addEventListener('click' ,(e) =>{
            dis1.innerText = "";
            dis2.innerText = "";
            dis3.innerText = "";
            dis1num = '';
            dis2num = '';
            result = "";
        })
        clear.addEventListener('click' ,(e) =>{
            dis2.innerText = "";
            dis2num = '';
        })
        window.addEventListener('keydown', (e)=>{
            if(
                e.key === '0' ||
                e.key === '1' ||
                e.key === '2' ||
                e.key === '3' ||
                e.key === '4' ||
                e.key === '5' ||
                e.key === '6' ||
                e.key === '7' ||
                e.key === '8' ||
                e.key === '9' ||
                e.key === '.' 
            ){
                clickButton(e.key);
            } else if (e.key == "32" || e.key === "C") {
                    clickClear();
                } 
            else if (
                e.key === '+' ||
                e.key === '-' ||
                e.key === '/' ||
                e.key === '%'
                ){
                    clickOpr(e.key);
                }else if (e.key === '*'){
                    clickOpr('x');
                } else if (e.key == "Enter" || e.key === "=") {
                    clickEqual();
                }  
        });
        function clickButton(key) {
            numS.forEach((button) =>{
                if (button.innerText ===key) {
                    button.click();
                }
            });
        }
        function clickOpr(key) {
            oprS.forEach((button) =>{
                if (button.innerText ===key) {
                    button.click();
                }
            });
        }
        function clickEqual() {
            eq.click();
          }
        function clickClear() {
            clear.click();
          }
          document.querySelector(".mode").addEventListener("click", () => {
            document.querySelector("body").classList.toggle("active");
          });
