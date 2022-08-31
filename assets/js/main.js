'use strict';

window.addEventListener('load', function () {
  if ('serviceWorker' in navigator)
    try {
      navigator.serviceWorker
        .register('sw.min.js', { scope: './' })
        .then(function (reg) {
          console.info('Service worker registration success');
        });
    } catch (err) {
      console.error(err);
    }
  else console.log('no serviceWorker');
});

var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");

const output = [
  "LOADING INFORMATION",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "...",
  "...",
  "aymen.exe -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  `java.lang.OutOfMemoryError: Java heap space  \n
  at java.nio.HeapIntBuffer.<init>(Unknown Source)  \n
  at java.nio.IntBuffer.allocate(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.UploadingPainter.run(Unknown Source)  \n
  at java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)  \n
  at java.util.concurrent.FutureTask.runAndReset(Unknown Source)  \n
  at com.sun.javafx.tk.RenderJob.run(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.QuantumRenderer$PipelineRunnable.run(Unknown Source)  \n
  at java.lang.Thread.run(Unknown Source)java.lang.OutOfMemoryError: Java heap space  \n
  at java.nio.HeapIntBuffer.<init>(Unknown Source)  \n
  at java.nio.IntBuffer.allocate(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.UploadingPainter.run(Unknown Source)  \n
  at java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)  \n
  at java.util.concurrent.FutureTask.runAndReset(Unknown Source)  \n
  at com.sun.javafx.tk.RenderJob.run(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.QuantumRenderer$PipelineRunnable.run(Unknown Source)  \n
  at java.lang.Thread.run(Unknown Source)  \n
java.lang.OutOfMemoryError: Java heap space  \n
  at java.nio.HeapIntBuffer.<init>(Unknown Source)  \n
  at java.nio.IntBuffer.allocate(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.UploadingPainter.run(Unknown Source)  \n
  at java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)  \n
  at java.util.concurrent.FutureTask.runAndReset(Unknown Source)  \n
  at com.sun.javafx.tk.RenderJob.run(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.QuantumRenderer$PipelineRunnable.run(Unknown Source)  \n
  at java.lang.Thread.run(Unknown Source)  \n
java.lang.OutOfMemoryError: Java heap space  \n
  at java.nio.HeapIntBuffer.<init>(Unknown Source)  \n
  at java.nio.IntBuffer.allocate(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.UploadingPainter.run(Unknown Source)  \n
  at java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)  \n
  at java.util.concurrent.FutureTask.runAndReset(Unknown Source)  \n
  at com.sun.javafx.tk.RenderJob.run(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)  \n
  at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)  \n
  at com.sun.javafx.tk.quantum.QuantumRenderer$PipelineRunnable.run(Unknown Source)  \n
  at java.lang.Thread.run(Unknown Source)   \n`,
  "EXIT;",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
]

let docfrag = document.createDocumentFragment();

function updateScreen() {

  output.push(output.shift());

  output.forEach(function (e) {
    let p = document.createElement("p");
    p.setAttribute('style', 'white-space: pre;');
    p.textContent = e;
    docfrag.appendChild(p);
  });

  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}