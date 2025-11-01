namespace ShoppingApp.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty; 
        public decimal DiscountPercentage { get; set; }
        public virtual ICollection<Product> Products { get; set; } = new List<Product>();
    }
}