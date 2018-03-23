function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arr = [];
    var nyampe = true;
    const harga = 2000;
    var bayar = 0;
    var indeksDari = '';
    var indeksTujuan = '';

    if (arrPenumpang.length === 0) {
        return arr;
    }

    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {}
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                indeksDari = j;
            }
            if (arrPenumpang[i][2] === rute[j]) {
                indeksTujuan = j;
            }
        }
        bayar = (indeksTujuan - indeksDari) * harga;
        arr.push(obj);

        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang[i][2];
        obj.bayar = bayar;
    }
    return arr;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]