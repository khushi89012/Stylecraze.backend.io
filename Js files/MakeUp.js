const beautyTips_data = [];
    function collectData(i, t, a){
        this.image = i;
        this.title = t;
        this.author = a;

    }
    let tip1 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2020/08/How-To-Avoid-Cakey-Foundation--Tricks-To-Avoid-Cakey-Makeup.jpg.webp","How To Avoid Cakey Foundation – Tricks To Avoid Cakey Makeup","BY SHALINI ROY");
    let tip2 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/03/How-To-Remove-Acrylic-Nails-At-Home-Easily.jpg.webp","How To Remove Acrylic Nails At Home Easily – Tips To Follow","BY SAKSHI BAHAL");
    let tip3 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2019/03/Acrylic-vs.-Gel-vs.-Shellac-Nails-What%E2%80%99s-The-Difference.jpg.webp","Acrylic vs. Gel vs. Shellac Nails: What’s The Difference?","BY ESHA SAXENA");
    let tip4 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2012/12/1554_How-To-Apply-Lipstick-Perfectly.jpg.webp","How To Apply Lipstick Perfectly","BY ESHA SAXENA");
    let tip5 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2019/08/How-To-Avoid-Bubbles-In-Nail-Polish.jpg.webp","How To Avoid Bubbles In Nail Polish","BY ESHA SAXENA");
    let tip6 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Apply-Eyeshadow-For-Beginners.jpg.webp","How To Apply Eyeshadow For Beginners (With Pictures)","BY SHALINI ROY")
    beautyTips_data.push(tip1,tip2,tip3,tip4,tip5,tip6);
    // console.log()
    let appendTips = (beautyTips_data)=>{
       let moreTips =  document.getElementById("S_moreMakeUpTips_div")
        beautyTips_data.forEach(ele =>{
            let div = document.createElement("div");
            div.className = "S_Tips"
            
            let image = document.createElement("img");
            image.src = ele.image;

            let tip = document.createElement("h1");
            tip.innerText = ele.title;

            let author = document.createElement("p");
            author.innerText = ele.author;

            div.append(image, tip, author);
            moreTips.append(div)

        })
    }
    appendTips(beautyTips_data)

    document.getElementById("hello eyeliner").addEventListener("click", newfn)

    function newfn(){
        window.location.href = "./eyeLiner.html"
    }