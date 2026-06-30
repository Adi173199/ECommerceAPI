using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class GenericRepository<T>(StoreContext _storeContext) : IGenericRepository<T> where T : BaseEntity
    {
        public void Add(T entity)
        {
            _storeContext.Set<T>().Add(entity);
        }

        public async Task<int> CountAsync(ISpecification<T> spec)
        {
            var query = _storeContext.Set<T>().AsQueryable();
            query = spec.ApplyCriteria(query);
            return await query.CountAsync();
        }

        public bool Exists(int id)
        {
            return _storeContext.Set<T>().Any(x => x.Id == id);
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            return await _storeContext.Set<T>().FindAsync(id);
        }

        public async Task<T?> GetEntityWithSpec(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<TResult?> GetEntityWithSpec<TResult>(ISpecification<T, TResult> spec)
        {
            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await _storeContext.Set<T>().ToListAsync();
        }

        public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        public async Task<IReadOnlyList<TResult>> ListAsync<TResult>(ISpecification<T,TResult> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        public void Remove(T entity)
        {
             _storeContext.Set<T>().Remove(entity);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _storeContext.SaveChangesAsync() > 0;
        }

        public void Update(T entity)
        {
            _storeContext.Set<T>().Attach(entity);
            _storeContext.Entry(entity).State = EntityState.Modified;
        }
        private IQueryable<T> ApplySpecification(ISpecification<T> specification)
        {
            return SpecificationEvaluator<T>.GetQuery(_storeContext.Set<T>().AsQueryable(), specification);
        }
        private IQueryable<TResult> ApplySpecification<TResult>(ISpecification<T, TResult> specification)
        {
            return SpecificationEvaluator<T>.GetQuery<T, TResult>(_storeContext.Set<T>().AsQueryable(), specification);
        }
    }
}
