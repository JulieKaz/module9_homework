let xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

let students = xmlDOM.querySelectorAll('student');

let result = {list: []};

students.forEach(function(item) {
  let first = item.querySelector('first').textContent;
  let second = item.querySelector('second').textContent;
  let name = first + ' ' + second;
  let age = Number(item.querySelector('age').textContent);
  let prof = item.querySelector('prof').textContent;
  let lang = item.querySelector('name').getAttribute('lang');
  result.list.push({name: name, age: age, prof: prof, lang: lang});
});

console.log(result);
