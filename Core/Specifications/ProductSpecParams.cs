namespace Core.Specifications
{
    public class ProductSpecParams
    {
        private const int MaxPageSize = 50;
        public int PageIndex { get; set; }
        public int _pageSize;

        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }
        private List<string> _brands = [];
        public List<string> Brands
        {
            get => _brands; // type = Angular, React
            set
            {
                _brands = value.SelectMany(x => x.Split(',', 
                    StringSplitOptions.RemoveEmptyEntries)).ToList();
            }
        }

        private List<string> _types = [];
        public List<string> Types
        {
            get => _types; // type = Boots,Gloves
            set
            {
                _types = value.SelectMany(x => x.Split(',',
                    StringSplitOptions.RemoveEmptyEntries)).ToList();
            }
        }

        public string? Sort {  get; set; }
        private string? _search { get; set; }

        public string? Search
        {
            get => _search ?? "";
            set => _search = value.ToLower();
            
        }

    }
}
