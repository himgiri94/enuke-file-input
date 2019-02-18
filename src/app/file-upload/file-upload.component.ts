import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public fileText = [];
  public fileOutput = [];
  public num: Object = {
    0: [' ', '_', ' ', '|', ' ', '|', '|', '_', '|'],
    1: [' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'],
    2: [' ', '_', ' ', ' ', '_', '|', '|', '_', ' '],
    3: [' ', '_', ' ', ' ', '_', '|', ' ', '_', '|'],
    4: [' ', ' ', ' ', '|', '_', '|', ' ', ' ', '|'],
    5: [' ', '_', ' ', '|', '_', ' ', ' ', '_', '|'],
    6: [' ', '_', ' ', '|', '_', ' ', '|', '_', '|'],
    7: [' ', '_', ' ', ' ', ' ', '|', ' ', ' ', '|'],
    8: [' ', '_', ' ', '|', '_', '|', '|', '_', '|'],
    9: [' ', '_', ' ', '|', '_', '|', ' ', '_', '|'],
  };


  constructor() { }

  ngOnInit() {
  }

  public fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var file = this;
    reader.onload = function () {
      file.printText(JSON.stringify(reader.result));
    }
  }

  public printText(data) {
    this.fileOutput = data.split('"')[1].split('\\n');
    this.singleInput(this.fileOutput);
  }

  public singleInput(data) {

    if (data.length) {
      const max = data.length / 4;
      for (var i = 0; i < max; i++) {
        let arrayConvert = [];
        for (var k = i * 4; k < (4 * (i + 1) - 1); k++) {
          arrayConvert.push(data[k]);
        }
        this.fileText.push(this.convertInput(arrayConvert));
      }
    }
    // this.fileText.join('\n');
  }

  public convertInput(data) {
    let max = [];

    if (data.length) {
      const maxIteration = data[0].length / 3;

      for (var i = 0; i < maxIteration; i++) {
        let x = [];
        for (var j = 0; j < 3; j++) {
          for (var k = i * 3; k < (3 * (i + 1)); k++) {
            x.push(data[j][k])
          }
        }

        for (var keys in this.num) {
          if (x.toString() === this.num[keys].toString()) {
            max.push(keys)
          }
        }
      }
    }
    return max.join('');
  }

}
