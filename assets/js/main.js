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
  "2022-09-08 15:53:16.345 EDT [609] LOG:  received fast shutdown request",
  "2022-09-08 15:53:16.335 EDT [609] LOG:  aborting any active transactions",
  "2022-09-08 15:53:16.146 EDT [609] LOG:  background worker logical replication launcher (PID 2) exited with exit code 1",
  "2022-09-08 15:53:16.194 EDT [748] LOG:  shutting down",
  "2022-09-08 15:53:16.163 EDT [609] LOG:  database system is shut down",
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
  "-rw-------. 1 root root   4524 Nov 15 16:04 anaconda.ifcfg.log",
  "-rw-------. 1 root root  59041 Nov 15 16:04 anaconda.log",
  "-rw-------. 1 root root  42763 Nov 15 16:04 anaconda.program.log",
  "-rw-------. 1 root root 299910 Nov 15 16:04 anaconda.storage.log",
  "-rw-------. 1 root root  40669 Nov 15 16:04 anaconda.syslog",
  "-rw-------. 1 root root  57061 Nov 15 16:04 anaconda.xlog",
  "-rw-------. 1 root root   1829 Nov 15 16:04 anaconda.yum.log ",
  "drwxr-x---. 2 root root   4096 Nov 15 16:11 audit",
  "-rw-r--r--  1 root root   2252 Dec  9 10:27 boot.log",
  "-rw-------  1 root utmp    384 Dec  9 10:31 btmp",
  "-rw-------. 1 root utmp   1920 Nov 28 09:28 btmp-20131202",
  "drwxr-xr-x  2 root root   4096 Nov 29 15:47 ConsoleKit",
  "-rw-------  1 root root   2288 Dec  9 11:01 cron",
  "-rw-------. 1 root root   8809 Dec  2 17:09 cron-20131202",
  "-rw-r--r--  1 root root  21510 Dec  9 10:27 dmesg",
  "-rw-r--r--  1 root root  21351 Dec  6 16:37 dmesg.old",
  "-rw-r--r--. 1 root root 165665 Nov 15 16:04 dracut.log",
  "-rw-r--r--. 1 root root 146876 Dec  9 10:44 lastlog",
  "-rw-------  1 root root    950 Dec  9 10:27 maillog",
  "-rw-------. 1 root root   4609 Dec  2 17:00 maillog-20131202",
  "-rw-------  1 root root 123174 Dec  9 10:27 messages",
  "-rw-------. 1 root root 458481 Dec  2 17:00 messages-20131202",
  "-rw-------  1 root root   2644 Dec  9 10:44 secure",
  "-rw-------. 1 root root  15984 Dec  2 17:00 secure-20131202",
  "-rw-------  1 root root      0 Dec  2 17:09 spooler",
  "-rw-------. 1 root root      0 Nov 15 16:02 spooler-20131202",
  "-rw-------. 1 root root      0 Nov 15 16:02 tallylog",
  "-rw-rw-r--. 1 root utmp  89856 Dec  9 10:44 wtmp",
  "-rw-------  1 root root   3778 Dec  6 16:48 yum.log",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  ".................................",
  "Z:> /AYMEN/GAMES/AYMEN/ EXECUTE -PLAYERS 0",
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