const xhr= new XMLHttpRequest();
const tbody =document.getElementById('leaderboard')

xhr.open("GET"," https://cademy.egytigers.com/api/full-stack-web-development-level-two/top_legends");

xhr.onreadystatechange =function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const result = JSON.parse(xhr.responseText);
        console.log(result);
        let output ="";
        result.forEach(element => {
            output +=`
                <tr>
                <td><img src="${element.pic}" width="70" height="70"></td>
                <td>${element.name}</td>
                <td>${element.points}</td>
                </tr>
            `        
        });
        tbody.innerHTML =output;
    }
    
}




xhr.send();