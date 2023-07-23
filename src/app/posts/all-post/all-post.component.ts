import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css'],
})
export class AllPostComponent implements OnInit {
  postArray: any;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    var data = new Array;
    this.postService.loadData().subscribe(val => {
      data.push(val);
      data.forEach(element => {
        console.log(element)
      })
      this.postArray = val;
    });
  }

  onDelete(postImgPath,id){
    this.postService.deleteImage(postImgPath, id);
  }

  onFeatured(id, value){
    const featuredData={
      isFeatured:value
    }
    this.postService.markFeatured(id,featuredData);
  }
  openImageCarousel(post: any){
    const imgBox = document.getElementById('imgBox');
    const imgElement = document.createElement('img');
    imgElement.src = post;
    imgElement.classList.add('asset-img');
    imgBox.appendChild(imgElement);
    if(imgBox != null){
      imgBox.style.display = 'flex'
    }
  }
  closeImageCarousel(){
    const imgBox = document.getElementById('imgBox');
    while (imgBox.firstChild) {
      imgBox.removeChild(imgBox.firstChild);
    }
    if(imgBox != null){
      imgBox.style.display = 'none'
    }
  }
}