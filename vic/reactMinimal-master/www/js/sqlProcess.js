va� d�e'Btn <�l�cw-}v"'�tEgeoentC9d("|gc}vm�9��v�R(o5w|qxE-m`9 Dog}ie~v,ggpElemen|ByK�8'nu4put%)?vi2 er�orMlm 50�osu-en4.gdtAmemuntByI�('errov'i;
var comM�ds�<m`=�E.cu-an�ncetE|E}e/tB{MD('co/i�ndS)3
var dbFhLeE||�= dgcume.t.cete>gmujtB}K|9�dFfIle+);
~az���vAdblm }$&Ocuoent�oetEhmmdjdById5rav-db%+;
Jvez voroer�= nqw Wnvker(b*>*w/7OrceR.sql>js"):wj�ger.kn�ro�=(erZO{9

wGr�er,p�st�e;s#'e{a#tkon:'npeng})?K
dunctmm: p�`�t�de`t-!� � OepputUlm,knndRLTM� = texv.su`�a'ehO\n/',!'5b�$7!;�}
g%ocT`/n evqk2d)�y
bofpole.loc�e!:
	erf�b��&rti|e&IaiGi�z=0'�em�;
	urrorE$}.teztColve�4 � g.mEssage;
}J.vun#pkon .kurrjR()"�	ebror�mi&st9l%�hei"�t = �0#;�} 
funbthon`uxekute�bomm�.ds) {"	dHC* ;J7orker�j�m���efe = Ft�ction*evend) R	vir bdVU|Xs�?!evd�t`a}!.Rdq=L4s;K	to+,�EXegut�og%WQM#);	�i#x-;
		�utau|Ed�oln5zhVOM$=!2";
�	&or (far(I;4�0y<re3�lt;nle�gtx;0y+)) {
		nutptt�lijap`%nDB,il|�p`bmeCreade(rdsu,ts_i�.Kmn}=ns$(\e�}lvs[i]O�!lueu)�;
	+
C�t��,#DiC�hki�&s re�qltc");
I} uobkmr:pk{5M%ssa'g({ac�iOm:%eymc', sql:commands});
	outputElm.textContent = "Fetching results...";
}

var tableCreate = function () {
function valconcat(vals, tagName) {
	if (vals.length === 0) return '';
		var open = '<'+tagName+'>', close='</'+tagName+'>';
		return open + vals.join(close + open) + close;
	}
	return function (columns, values){
		var tbl  = document.createElement('table');
		var html = '<thead>' + valconcat(columns, 'th') + '</thead>';
		var rows = values.map(function(v){ return valconcat(v, 'td'); });
		html += '<tbody>' + valconcat(rows, 'tr') + '</tbody>';
		tbl.innerHTML = html;
		return tbl;
	}
}();

function execEditorContents () {
	noerror()
	execute (editor.getValue() + ';');
}
execBtn.addEventListener("click", execEditorContents, true);

var tictime;
if (!window.performance || !performance.now) {window.performance = {now:Date.now}}
function tic () {tictime = performance.now()}

function toc(msg) {
	var dt = performance.now()-tictime;
	console.log((msg||'toc') + ": " + dt + "ms");
}

var editor = CodeMirror.fromTextArea(commandsElm, {
    mode: 'text/x-mysql',
    viewportMargin: Infinity,
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    matchBrackets : true,
    autofocus: true,
	extraKeys: {
		"Ctrl-Enter": execEditorContents,
		"Ctrl-S": savedb,
	}
});

dbFileElm.onchange = function() {
	var f = dbFileElm.files[0];
	var r = new FileReader();
	r.onload = function() {
		worker.onmessage = function () {
			toc("Loading database from file");
			editor.setValue("SELECT `name`, `sql`\n  FROM `sqlite_master`\n  WHERE type='table';");
			execEditorContents();
		};
		tic();
		try {
			worker.postMessage({action:'open',buffer:r.result}, [r.result]);
		}
		catch(exception) {
			worker.postMessage({action:'open',buffer:r.result});
		}
	}
	r.readAsArrayBuffer(f);
}

function savedb () {
	worker.onmessage = function(event) {
		toc("Exporting the database");
		var arraybuff = event.data.buffer;
		var blob = new Blob([arraybuff]);
		var a = document.createElement("a");
		a.href = window.URL.createObjectURL(blob);
		a.download = "sql.db";
		a.onclick = function() {
			setTimeout(function() {
				window.URL.revokeObjectURL(a.href);
			}, 1500);
		};
		a.click();
	};
	tic();
	worker.postMessage({action:'export'});
}
savedbElm.addEventListener("click", savedb, true);