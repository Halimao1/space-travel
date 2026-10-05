import styles from "./SpacecraftForm.module.css";
function SpacecraftForm({ formData, errors, onChange, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
        />
        {errors.name && <p className={styles.error}>Name is required.</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="capacity">
          Capacity
        </label>
        <input
          className={styles.input}
          id="capacity"
          name="capacity"
          type="number"
          value={formData.capacity}
          onChange={onChange}
        />
        {errors.capacity && (
          <p className={styles.error}>Capacity is required.</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <textarea
          className={styles.textarea}
          id="description"
          name="description"
          value={formData.description}
          onChange={onChange}
        />
        {errors.description && (
          <p className={styles.error}>Description is required.</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="pictureUrl">
          Picture URL (optional)
        </label>
        <input
          className={styles.input}
          id="pictureUrl"
          name="pictureUrl"
          type="text"
          value={formData.pictureUrl}
          onChange={onChange}
        />
      </div>

      <button className={styles.button} type="submit">
        Build Spacecraft
      </button>
    </form>
  );
}
export default SpacecraftForm;
