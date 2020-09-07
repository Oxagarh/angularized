import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'h-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit, OnChanges {
  @Input() comment: Comment;
  @Output() selected = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void { }

  public selectedComment(comment: Comment): void {
    this.selected.emit(comment);
  }

}
