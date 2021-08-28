/* -------------------------------------------- */
/*                  Title Case                  */
/* -------------------------------------------- */

/** Converts all the alphabetic characters in a string to propercase. */
String.prototype.toProperCase = function(str) {
  return (str ? this.toString().toLowerCase() : this).replace(
    /\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
}
