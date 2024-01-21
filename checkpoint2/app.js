let menu = ["rau xao", "thit luoc", "ga ran"];
localStorage.setItem("menu",JSON.stringify(menu));

let input
do{
    input = prompt("Moi nguoi dung nhap vao C,R,U,D").toLowerCase().trim();
    if(input == "c"){
    menu.push(
        prompt("Moi nguoi dung nhao vao mon an moi")
    )
}
else if(input == "r"){
    alert(menu.join(","));
}
else if(input == "u"){
    let viTriPhanTuMuonTim = menu.indexOf(prompt("Moi nguoi dung nhap vao vi tri muon tim"));
    menu[viTriPhanTuMuonTim] = prompt("Moi nguoi dung nhap ten mon an muon tim");
}
else if(input == "d"){
    let viTriPhanTuMuonXoa = menu.indexOf(prompt("Moi nguoi dung nhap vao mon an muon xoa"));
    menu.splice(viTriPhanTuMuonXoa, 1);
}
}

while(input== "c" || input == "r"|| input == "u" || input == "d");

function creatMenu(){
    const data = {
        food : prompt("Moi nguoi dung nhap mon an muon them vao menu")
    }
    let getMenu = JSON.parse(localStorage.getItem("menu"));
    getMenu.push(data);

    localStorage.setItem("menu".JSON.stringify(getMenu));
    getMenu.push(data);
    localStorage.setItem("menu".JSON.stringify(getMenu));

    return data
}
function readMenu()
function updateMenu(){
    nameUpdate = prompt("Moi nguoi dung nhap vao ten nhom muon update").trim();
    let viTriPhanTuMuonTim = getMenu.indexOf();
    menu[viTriPhanTuMuonTim] = prompt("Moi nguoi dung nhap ten mon an muon tim");

}

function deleteMenu(){
    let viTriPhanTuMuonXoa = getMenu.indexOf();
    menu[viTriPhanTuMuonXoa] = prompt("Moi nguoi dung nhap vao ten mon an muon delete")
    menu.splice(viTriPhanTuMuonXoa, 1);
}        
