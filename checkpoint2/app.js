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
else if(input == "u"){
    let viTriPhanTuMuonXoa = menu.indexOf(prompt("Moi nguoi dung nhap vao mon an muon xoa"));
    menu.splice(viTriPhanTuMuonXoa, 1);
}
}

while(input== "c" || input == "r"|| input == "u" || input == "d");

        