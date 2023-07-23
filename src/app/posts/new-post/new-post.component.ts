import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permalink:string = '';
  priceType:string = '';
  categories:any;
  imgSrc:any='./assets/image_placeholder.png';
  selectedImg:any;
  postForm: FormGroup;
  post:any;
  formStatus:string='Add New';
  docId:any;

  constructor(private categoryService:CategoriesService, private fb:FormBuilder, private postService:PostsService, private route:ActivatedRoute) { 
    this.postForm =this.fb.group({
        title:['',[Validators.required, Validators.minLength(10)]],
        permalink:['',Validators.required],
        priceType:[''],
        excerpt:['',[Validators.required, Validators.minLength(5)]],
        category:['',Validators.required],
        postImg:['',Validators.required],
        content:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val =>{
      this.categories = val;
    });

  }
  get fc(){
    return this.postForm.controls;
  }

  onTitleChanged($event){
    const title=$event.target.value;
    this.permalink = title.replace(/\s/g,'-')
  }
  onCategoryChanged($event){
    var title = $event.target.value.split('-')[1];
    var value = this.priceType
    if(value[0] === '/'){value = ''}
    else{
      value = value.split('/')[0]
    }
    switch (title) {
      case 'AirBNB':
        this.priceType = value + "/Night"
        break;
      case 'Rent':
        this.priceType = value + "/Month"
        break;
      case 'Sale':
        this.priceType = value + "/Total"
        break;
    }
  }

  showPreview($event){
    const reader = new FileReader();
    reader.onload=(e)=>{
      this.imgSrc=e.target.result
    }
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg=$event.target.files[0];
  }

  onSubmit(){
    console.log(this.postForm.value);
    let splitted = this.postForm.value.category.split('-');

    const postData:Post={
      title:this.postForm.value.title,
      permalink:this.postForm.value.permalink,
      category:{
        categoryId:splitted[0],
        category:splitted[1]
      },
      postImgPath:'',
      excerpt:this.postForm.value.excerpt,
      content:this.postForm.value.content,
      isFeatures:false,
      view:0,
      status:'new',
      createdAt:new Date(),
      Price:this.postForm.value.priceType
    }
    this.postService.uploadImage(this.selectedImg,postData,this.formStatus,this.docId);
    this.postForm.reset();
    this.imgSrc='./assets/images.png';
  }

}
