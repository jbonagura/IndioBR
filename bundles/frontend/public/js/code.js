function getExampleRef() {
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

var firepadRef = getExampleRef();
// TODO: Replace above line with:
// var ref = new Firebase('<YOUR FIREBASE URL>');

var codeMirror = CodeMirror(document.getElementById('firepad-container'), {
	lineNumbers: true,
	mode: 'javascript'
});

var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror);
firepad.on('ready', function() {
	if (firepad.isHistoryEmpty()) {
        firepad.setText('// JavaScript Editing with Firepad!\nfunction go() {\n var message = "Hello, world.";\n console.log(message);\n}');
	}
});