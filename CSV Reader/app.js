const div = document.getElementById("add-table")

let url = "";
let tableExists = false;
let table;

let insertData = (...args) => {
  let tr = document.createElement("tr");
  for (let i = 0; i < args[0].length; i++) {
    let td = document.createElement("td");
    td.textContent = args[0][i];
    tr.appendChild(td);
    table.append(tr);
  }
};

function insertHeaders(...args) {
  table = document.createElement("table")
  div.append(table)
  let tr = document.createElement("tr");
  for (let i = 0; i < args[0].length; i++) {
    let th = document.createElement("th");
    th.textContent = args[0][i];
    tr.appendChild(th);
    table.append(tr);
  }
}
let grabHeaders = async (url, token) => {
  const response = await fetch(url);
  const text = await response.text();
  let i = 0;
  let headers = text.split("\n").slice(0, 1);
  headers.forEach((elem) => {
    const cols = elem.split(token);
    insertHeaders(cols);
    tableExists = true;
  });
};

let grabData = async (url, token) => {
  const response = await fetch(url);
  const text = await response.text();

  const rows = text.split("\n").slice(1);
  rows.forEach((elem) => {
    const cols = elem.split(token);
    insertData(cols);
  });
};

// Run feature detection.
const supportsFileSystemAccessAPI =
  "getAsFileSystemHandle" in DataTransferItem.prototype;

// This is the drag and drop zone.
const elem = document.querySelector("main");

// Prevent navigation.
elem.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Visually highlight the drop zone.
elem.addEventListener("dragenter", (e) => {
  elem.style.outline = "solid red 1px";
});

// Visually unhighlight the drop zone.
elem.addEventListener("dragleave", (e) => {
  elem.style.outline = "";
});

// This is where the drop is handled.
elem.addEventListener("drop", async (e) => {
  url = "";
  // Prevent navigation.
  e.preventDefault();
  // Unhighlight the drop zone.
  elem.style.outline = "";
  // Prepare an array of promises…
  const fileHandlesPromises = [...e.dataTransfer.items]
    // …by including only files (where file misleadingly means actual file _or_
    // directory)…
    .filter((item) => item.kind === "file")
    // …and, depending on previous feature detection…
    .map((item) =>
      supportsFileSystemAccessAPI
        ? // …either get a modern `FileSystemHandle`…
          item.getAsFileSystemHandle()
        : // …or a classic `File`.
          item.getAsFile()
    );
  // Loop over the array of promises.
  for await (const handle of fileHandlesPromises) {
    // This is where we can actually exclusively act on the files.
    if (handle.kind === "file" || handle.isFile) {
      url = handle.name;
      if(!flag){
        grabHeaders("csv/" + url, ";");
        grabData("csv/" + url, ";");
        flag = true;
      }else{
        table.remove()
        grabHeaders("csv/" + url, ";");
        grabData("csv/" + url, ";");
      }
    }
  }
});


let flag = false;