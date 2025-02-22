import { CCategory } from "./controler/category.controller.js";
import { CProduct } from "./controler/product.controller.js";
let CP = new CProduct();
CP.indexAdmin();
let CCate = new CCategory();
CCate.indexAdmin();
CP.formDisplay();
