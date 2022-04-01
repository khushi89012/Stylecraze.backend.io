const beautyTips_data = [];
    function collectData(i, t, a){
        this.image = i;
        this.title = t;
        this.author = a;

    }
    let tip1 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Top-10-Most-Loved-Belly-Henna-Designs-You-Can-Try.jpg.webp","Top 10 Most Loved Belly Henna Designs You Can Try In 2019","BY NISHA BAGHADIA");
    let tip2 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/12/2564-simple-arabic-mehndi-design-for-back-hand.jpg.webp","Top 10 Engagement Mehndi Designs You Should Try In 2019","BY NISHA BAGHADIA");
    let tip3 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/10/Eye-Catching-Eid-Mehndi-Designs-You-Should-Try.jpg.webp","Top 10 Eye-Catching Eid Mehndi Designs You Should Try In 2019","BY JYOTSANA RAO");
    let tip4 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/09/719-312412208.jpg","10 Best And Simple Mehandi Designs For Kids : 2018-2019 Special Collection","BY JYOTSANA RAO");
    let tip5 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/04/28-iStock-535025923.jpg.webp","20 Outstanding Bridal Mehendi Designs Collection 2019","BY NISHA BAGHADIA");
    let tip6 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2015/03/195-outstanding-bridal-mehndi-designs-for-your-wedding-day-183288557.jpg","How To Apply Eyeshadow For Beginners (With Pictures)","BY NISHA BAGHADIA")
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