function getExampleRefText() {
  var ref = new Firebase('https://firepad.firebaseio-demo.com');
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push();
    window.location = window.location + '#' + ref.name();
  }

  if (typeof console !== 'undefined')
    console.log('Firebase data: ', ref.toString());

  return ref;
}

var firepadRefText = getExampleRefText();

var codeMirrorText = CodeMirror(document.getElementById('firepad-text'), { lineWrapping: true });

var firepadText = Firepad.fromCodeMirror(firepadRefText, codeMirrorText, { richTextToolbar: true, richTextShortcuts: true });

firepadText.on('ready', function() {
	if (firepadText.isHistoryEmpty()) {
		firepadText.setHtml('Digite seu texto aqui!');
	}
})
