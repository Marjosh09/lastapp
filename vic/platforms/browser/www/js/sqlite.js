// let db = function(){
//     'use strict';
//     return {
//         ini:function(){
//             return new SQL.Database();
//         },
//         create:function(db,table,fields){
//             return db.run(`CREATE TABLE ${table}(${fields});`);
//         }
//     }
// }();

// let table = function(){
//     'use strict';
//     return {
//         insert:function(db,table,values){
//             return db.run(`INSERT INTO ${table} VALUES (?,?,?,?)`, values);
//         },
//         view:function(db,sql){
//             let stmt = db.prepare(sql);
//             return stmt.getAsObject({$start:1, $end:1});
//         },
//         manipulate:function(){

//         }     
//     }
// }();

// let dbase = db.ini();
// db.create(dbase,'tbl_admin',`id,name,address,email`);
// table.insert(dbase,`tbl_admin`,[1,'Rufo N. Gabrillo JR.','Macabito Calasiao Pangasinan','rufo.gabrillo@gmail.com']);

// let admin = table.view(dbase,`SELECT * FROM tbl_admin`);
// console.log(admin);

// let content = `
// Name: ${admin.name} <br/>
// Address: ${admin.address} <br/>
// Email: ${admin.email} <br/>
// `;

// document.getElementById('root').innerHTML = content;

let _root = document.getElementById('root');
let dom = <div>
			<div id='calc'></div>
				<input type='number' id="num1" placeholder="input Integer" /> &nbsp;
				<input type='number' id="num2" placeholder="input Integer" /><div></div>
				<input type='button' onClick={a} value='Sum(+)'/>
				<input type='button' onClick={b} value='Difference(-)'/>
				<input type='button' onClick={c} value='Product(*)'/>
				<input type='button' onClick={d} value='Quotient(/)'/><div></div>
				<input type='button' onClick={e} value='Modolu(%)'/>
				<input type='button' onClick={f} value='Raise(^)'/>
				<input type='button' onClick={g} value='Root'/>
			</div>;
ReactDOM.render(dom,_root);

					