import { Component } from '@angular/core';
@Component({
  selector: 'app-allchats',
  templateUrl: './allchats.component.html',
  styleUrls: ['./allchats.component.css']
})
export class AllchatsComponent {
    public textarea:string='';

    // public isEmojiPickerVisible: boolean=false;
  //  public addEmoji(event:any) {
  //     this.textarea = `${this.textarea}${event.emoji.native}`;
  //     this.isEmojiPickerVisible = false;
  //  }

//    addEmoji(selected: Emoji) {
//     const emoji: string = (selected.emoji as any).native;
//     const input = this.input.nativeElement;
//     input.focus();

//     if (document.execCommand){ // document.execCommand is absolute but it //add support for undo redo and insert emoji at carrot position
// //any one has better solution ?

//       var event = new Event('input');
//       document.execCommand('insertText', false, emoji);
//       return; 
//     }
//        // insert emoji on carrot position
//     const [start, end] = [input.selectionStart, input.selectionEnd]; 
//     input.setRangeText(emoji, start, end, 'end');
//   }

public isEmojiPickerVisible: boolean=false;
public comment: string = '';

public addEmoji(event: { emoji: { native: any; }; }) {
  this.comment = `${this.comment}${event.emoji.native}`;
  this.isEmojiPickerVisible = false;
}

}
