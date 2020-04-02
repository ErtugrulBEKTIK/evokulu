import {observable, action} from 'mobx';

class GalleryStore{

  @observable modals = {
    camera: false,
    gallery: false,
    imageEdit: false,
  };

  @observable selectedImage = {};

  @observable lastImageUri = '';


  @action setModal(modalName, isOpen){
    this.modals[modalName] = isOpen;
  }

  @action setImage(image){
    this.selectedImage = image;
    this.modals = {
      camera: false,
      gallery: false,
      imageEdit: true,
    };
  }

  @action setLastImage(uri){
    this.lastImageUri = uri;
    this.modals = {
      camera: false,
      gallery: false,
      imageEdit: false,
    };
  }


}

export default new GalleryStore();