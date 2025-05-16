export class XComponent implements OnInit {
  categories: Category[] = [];

  constructor() {
    private categoryService: CategoryService
  }
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
