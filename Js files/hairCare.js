const beautyTips_data = [];
    function collectData(i, t, a){
        this.image = i;
        this.title = t;
        this.author = a;

    }
    let tip1 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2018/10/What-Are-The-Different-Hair-Types-How-To-Determine-Your-Hair-Type.jpg.webp","What Are The Different Hair Types? How To Determine Your Hair Type?","MEDICALLY REVIEWED BY DR. REKHA YADAV , TRICHOLOGY");
    let tip2 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/10/What-Is-The-Truth-About-Hair-Oils-For-Dandruff.jpg.webp","Hair Oils For Dandruff","MEDICALLY REVIEWED BY DR. SREEKAR HARINATHA , MBBS, MS, MCH, DNB PLASTIC & COSMETIC SURGEON, PLASTIC & COSMETIC SURGERY");
    let tip3 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2013/09/Can-Ayurveda-Help-With-Premature-Gray-Hair.jpg.webp","Can Ayurveda Help With Premature Gray Hair?","MEDICALLY REVIEWED BY DR. NITHYA RAGHUNATH , MBBS, MD (DERMATOLOGY) DERMATOLOGIST & COSMETOLOGIST, DERMATOLOGY, LASERS & COSMETOLOGY");
    let tip4 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2020/11/Coffee-For-Hair-Growth-Benefits.jpg.webp","Coffee For Hair: Benefits, How To Use, And Precautions","BY ARSHIYA SYEDA");
    let tip5 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2017/11/20-Amazing-Dark-Ombre-Hair-Color-Ideas.jpg.webp","20 Amazing Dark Ombre Hair Color Ideas","BY ARSHIYA SYEDA");
    let tip6 = new collectData("https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Everything-You-Need-To-Know-About-Bleach-Bath.jpg.webp","Everything You Need To Know About Bleach Bath","BY ARSHIYA SYEDA")
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
    appendTips(beautyTips_data);


let DryHair = ()=>{
    document.querySelector(".S_Poster_div").addEventListener("click",()=>{
        window.location.href = "dryHair.html"
    })
}

export default DryHair;