
type Callback = (...args: any[]) => any;

/**
 * NextHooks - A lightweight event system for Next_CMS plugins and themes.
 * Inspired by WordPress Action and Filter hooks.
 */
class HookSystem {
  private actions: Map<string, Callback[]> = new Map();
  private filters: Map<string, Callback[]> = new Map();

  /**
   * Register an action callback.
   * Actions are for side effects (e.g., sending notifications).
   */
  addAction(name: string, callback: Callback) {
    if (!this.actions.has(name)) this.actions.set(name, []);
    this.actions.get(name)!.push(callback);
  }

  /**
   * Trigger an action.
   */
  doAction(name: string, ...args: any[]) {
    const callbacks = this.actions.get(name) || [];
    callbacks.forEach((callback) => {
      try {
        callback(...args);
      } catch (error) {
        console.error(`Error in action hook "${name}":`, error);
      }
    });
  }

  /**
   * Register a filter callback.
   * Filters are for modifying data.
   */
  addFilter(name: string, callback: Callback) {
    if (!this.filters.has(name)) this.filters.set(name, []);
    this.filters.get(name)!.push(callback);
  }

  /**
   * Apply filters to a value.
   * Each callback should return the modified value.
   */
  applyFilters(name: string, value: any, ...args: any[]) {
    const callbacks = this.filters.get(name) || [];
    return callbacks.reduce((acc, callback) => {
      try {
        return callback(acc, ...args);
      } catch (error) {
        console.error(`Error in filter hook "${name}":`, error);
        return acc;
      }
    }, value);
  }
}

// Global instance
export const hooks = new HookSystem();
export default hooks;
