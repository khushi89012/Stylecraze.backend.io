let data = [];

function collectData(t,i,f,i1,i2,i3,i4,i5,i6,i7,u,s1,s2,s3,s4,s5,s6){
    this.title = t;
    this.image = i;
    this.as = f;
    this.i1 = i1;
    this.i2 = i2;
    this.i3 = i3;
    this.i4 = i4;
    this.i5 = i5;
    this.i6 = i6;
    this.i7 = i7;
    this.u = u;
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    this.s4 = s4;
    this.s5 = s5;
    this.s6 = s6;
}
let t1 = new collectData("Brown And Gold Soft Eye Makeup","https://cdn2.stylecraze.com/wp-content/uploads/2013/09/1.-Brown-And-Gold-Soft-Eye-Makeup-1.jpg.webp","This pretty eyeshadow oriented look uses brown and gold eyeshadow that’s blended in together. Remember, blending is key. It’s a subtle yet festive look that looks so beautiful","What You Need","Brown eyeshadow","Gold eyeshadow","Thin brush","Flat brush","Eyeshadow blending brush","Mascara","How To Apply Brown And Gold Soft Eye Makeup?","Start by applying an eye makeup primer.","Using a thin brush, deposit the brown shadow on the inner as well as the outer corner of your eye.","With a flat brush, use gold eyeshadow for the center.","Use the thin brush to enhance your lower lash line with brown and gold.","With your eyeshadow blending brush, blend out the eyeshadows properly.","Swipe on some mascara to complete the look!");
let t2 = new collectData("Soft Smokey Eye","https://cdn2.stylecraze.com/wp-content/uploads/2013/09/2.-Soft-Smokey-Eye.jpg.webp","This soft smokey eye look is great for evenings or night outs! It looks sultry and smoking hot. Also, this look is really simple to achieve. Pair it up with nude lips, and you will slay.","What You Need","Flat eyeshadow brush","Nude eyeshadow","Brown eyeshadow","Black eyeshadow","Black eyeliner","Mascara","How To Apply Soft Smokey Eye Makeup?","Use a primer and cover your eyelid with a nude eyeshadow. This way your makeup will stay put for longer.","Line your upper and lower waterline with a black eyeliner pencil.","With a flat brush, use the soft brown eyeshadow to cover up the upper eyelid and the area right under your lower lashline. Make sure you elongate the outer corners.","Repeat the process using black eyeshadow and start at the outer corner.","Blend well.","Apply mascara to finish the look.");
let t3 = new collectData(" Gold Festive Eyes","https://cdn2.stylecraze.com/wp-content/uploads/2013/09/3.-Gold-Festive-Eyes.jpg.webp","This gorgeous gold eyeshadow with the perfect winged liner looks strikingly festive. It’s bright and youthful and will look exceptionally beautiful on those of you with brown eyes.","What You Need","Brown eyeliner pencil","Flat eyeshadow brush","Blending brush","Golden eyeshadow","Black liquid eyeliner","Mascara","How To Apply Gold Festive Eye Makeup?","Using a brown eyeliner pencil, draw a semi-circle on the crease of your upper eyelid, filling in only the outer corner.","With a flat brush, blend and smoothen the product out until there are no harsh lines visible.","At the center, apply golden eyeshadow and blend properly.","Using a black liquid eyeliner, do a simple winged line on your upper lashline.","Apply a thick coat of mascara to achieve the final result.","make sure the rest of your face has a rather minimal do to keep the focus on the eyes.");

data.push(t1,t2,t3);
displayData(data)
// console.log(data);

// console.log(data)
function displayData(data){
    let tutorials = document.getElementById("S_tutorials")
    data.forEach(ele => {
        let div = document.createElement("div");
        div.className = "S_tutorialCards"

        let title = document.createElement("h2");
        title.textContent = ele.title;

        let image = document.createElement("img");
        image.src = ele.image;

        let info = document.createElement("p");
        info.textContent = ele.as;
        
        let need = document.createElement("h3");
        need.innerText = ele.i1;

        // let 
        let list = document.createElement("ul");
        
        let i1 = document.createElement("li");
        i1.textContent =ele.i2;
        let i2 = document.createElement("li");
        i2.innerText = ele.i3;
        let i3 = document.createElement("li");
        i3.innerText = ele.i4;
        let i4 = document.createElement("li");
        i4.innerText = ele.i5;
        let i5 = document.createElement("li");
        i5.innerText = ele.i6;
        let i6 = document.createElement("li");
        i6.innerText = ele.i7;

        let process = document.createElement("h3");
        process.innerText = ele.u;

        let list2 = document.createElement("ul");
        
        let s1 =document.createElement("li");
        s1.innerText = ele.s1;
        let s2 =document.createElement("li");
        s2.innerText = ele.s2;
        let s3 =document.createElement("li");
        s3.innerText = ele.s3;
        let s4 =document.createElement("li");
        s4.innerText = ele.s4;
        let s5 =document.createElement("li");
        s5.innerText = ele.s5;
        let s6 = document.createElement("li")
        s6.innerText = ele.s6


        list2.append(s1,s2,s3,s4,s5,s6)
        list.append(i1,i2,i3,i4,i5,i6);


        div.append(title,image,info,need,list,process,list2)
        tutorials.append(div);
    })
}