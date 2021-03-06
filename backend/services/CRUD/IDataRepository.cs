using System.Collections.Generic;

namespace KanbanSoft.Services
{
    public interface IDataRepository<TEntity>
    {
        public IEnumerable<TEntity> GetAll();
        public TEntity GetEntity(int id);
        public bool Add(TEntity et);
        public bool Update(TEntity et);
        public bool Delete(TEntity et);
    }
}