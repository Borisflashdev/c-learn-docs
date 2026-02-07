import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

// Helper component for function links
function FuncLink({ name, color }: { name: string; color: string }) {
  const navigate = useNavigate()
  return (
    <span
      onClick={() => navigate(`/guide/matrix/${name}`)}
      className="cursor-pointer underline transition-colors hover:opacity-70"
      style={{ color }}
    >
      {name}()
    </span>
  )
}

const headerFile = `#ifndef MATRIX_H
#define MATRIX_H

#include <stdio.h>

#include "../errors/errors.h"
#include "../vector/vector.h"

typedef struct {
    int rows;
    int cols;
    double *data;
} Matrix;

Matrix *matrix_create(int rows, int cols);
Matrix *matrix_copy(const Matrix *X);
void matrix_free(Matrix *X);

double matrix_get(const Matrix *X, int i, int j);
void matrix_set(Matrix *X, int i, int j, double value);

Matrix *read_csv(const char *path, char separator, int has_header);
void matrix_print(const Matrix *X);
void matrix_print_head(const Matrix *X, int num);
void matrix_print_tail(const Matrix *X, int num);

void matrix_shape(const Matrix *X);
double matrix_size(const Matrix *X);

Matrix *matrix_transpose(Matrix *X, int inplace);
Matrix *matrix_inverse(Matrix *X, int inplace);
Matrix *matrix_slice(const Matrix *X, int i_start, int i_end, int j_start, int j_end);
Matrix *matrix_slice_rows(const Matrix *X, int start, int end);
Matrix *matrix_slice_cols(const Matrix *X, int start, int end);
Matrix *matrix_concat(const Matrix *A, const Matrix *B);

Matrix *matrix_arithmetic(const Matrix *A, const Matrix *B, char op);
Matrix *matrix_multiplication(const Matrix *A, const Matrix *B);
void matrix_scalar_arithmetic(Matrix *X, double scalar, char op);

double matrix_min(const Matrix *X);
double matrix_max(const Matrix *X);
double matrix_sum(const Matrix *X);
double matrix_mean(const Matrix *X);

double matrix_col_min(const Matrix *X, int col);
double matrix_col_max(const Matrix *X, int col);
double matrix_col_sum(const Matrix *X, int col);
double matrix_col_mean(const Matrix *X, int col);
double matrix_col_std(const Matrix *X, int col, int ddof);
double matrix_col_dot_product(const Matrix *A, int col_A, const Matrix *B, int col_B);
void matrix_apply_col(Matrix *X, int col, double (*func)(double));

Matrix *vector_to_matrix(const Vector *x);
Vector *matrix_to_vector(const Matrix *X, int col, int row_start, int row_end);

#endif`

function MatrixOverview({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat overview.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>Matrix</span> module provides
            a complete set of matrix operations for machine learning applications.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> A matrix is stored as a contiguous 1D array in row-major order
            with dimensions tracked separately.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{headerFile}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

function MatrixStructure({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_structure
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In mathematics, a <span style={{ color }}>matrix</span> is
            a rectangular array of numbers arranged in rows and columns. It is a 2-dimensional generalization of a vector.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> A matrix with m rows and n columns is called an <span style={{ color }}>m × n matrix</span>:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`     [ a₁₁  a₁₂  ...  a₁ₙ ]
`}<span style={{ color }}>A</span>{` =  [ a₂₁  a₂₂  ...  a₂ₙ ]
     [ ...  ...  ...  ... ]
     [ aₘ₁  aₘ₂  ...  aₘₙ ]`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Each element <span style={{ color }}>aᵢⱼ</span> is located at row i and column j.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Special types of matrices:</span>
          </p>
          <ul className="mt-4 space-y-3 pl-6 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Square Matrix</span> — has equal number of rows and columns (m = n)
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Row Vector</span> — a matrix with only one row (1 × n)
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Column Vector</span> — a matrix with only one column (m × 1)
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Identity Matrix</span> — square matrix with 1s on diagonal and 0s elsewhere
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Zero Matrix</span> — all elements are zero
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Diagonal Matrix</span> — non-zero elements only on the main diagonal
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Symmetric Matrix</span> — equal to its transpose (A = Aᵀ)
            </li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Transpose</span> — flipping a matrix over its diagonal, swapping rows and columns:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>Aᵀ</span>ᵢⱼ = Aⱼᵢ
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If A is m × n, then Aᵀ is n × m.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Inverse</span> — for a square matrix A, the inverse A⁻¹ satisfies:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>A × A⁻¹</span> = A⁻¹ × A = <span style={{ color }}>I</span> (identity matrix)
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Not all matrices have an inverse. A matrix is <span style={{ color }}>invertible</span> (non-singular)
            if its determinant is non-zero.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Determinant</span> — a scalar value that can be computed from a square matrix.
            It indicates whether a matrix is invertible (det ≠ 0) and represents the scaling factor of the linear transformation.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat why_matrices_in_ml.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In machine learning, matrices are <span style={{ color }}>essential data structures</span>:
          </p>
          <ul className="mt-4 space-y-3 pl-6 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Datasets</span> — each row is a sample, each column is a feature
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Weight matrices</span> — connections between layers in neural networks
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Covariance matrices</span> — capture relationships between features
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Transformation matrices</span> — linear transformations like rotation, scaling
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Adjacency matrices</span> — represent graphs in graph neural networks
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_struct.c</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In C Learn, a matrix is defined as a simple C structure:
          </p>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
            <pre className="font-mono text-default text-white/80">
              <code>{`typedef struct {
    int rows;      // number of rows
    int cols;      // number of columns
    double *data;  // pointer to array of double values (row-major order)
} Matrix;`}</code>
            </pre>
          </div>
          <div className="mt-6 overflow-x-auto rounded border border-white bg-black/40">
            <table className="w-full font-mono text-default">
              <thead>
                <tr className="border-b border-white">
                  <th className="border-r border-white px-4 py-3 text-left text-white/90">FIELD</th>
                  <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                  <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>rows</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Number of rows in the matrix</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>cols</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Number of columns in the matrix</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>data</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">double*</td>
                  <td className="px-4 py-3 text-white/70">Pointer to dynamically allocated array storing values in row-major order</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Data is stored in <span style={{ color }}>row-major order</span>: element at (i, j) is accessed
            as <span style={{ color }}>data[i * cols + j]</span>. This layout is cache-friendly for row-wise operations.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix.h</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Complete header file with all function declarations:
          </p>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
            <pre className="font-mono text-sm leading-relaxed text-white/80">
              <code>{headerFile}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ ls functions/</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Functions are organized into the following categories:
          </p>
          <div className="mt-6 overflow-x-auto rounded border border-white bg-black/40">
            <table className="w-full font-mono text-default">
              <thead>
                <tr className="border-b border-white">
                  <th className="border-r border-white px-4 py-3 text-left text-white/90">CATEGORY</th>
                  <th className="px-4 py-3 text-left text-white/90">FUNCTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Lifecycle</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_create" color={color} />, <FuncLink name="matrix_copy" color={color} />, <FuncLink name="matrix_free" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Access</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_get" color={color} />, <FuncLink name="matrix_set" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>I/O</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="read_csv" color={color} />, <FuncLink name="matrix_print" color={color} />, <FuncLink name="matrix_print_head" color={color} />, <FuncLink name="matrix_print_tail" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Info</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_shape" color={color} />, <FuncLink name="matrix_size" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Transform</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_transpose" color={color} />, <FuncLink name="matrix_inverse" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Slicing</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_slice" color={color} />, <FuncLink name="matrix_slice_rows" color={color} />, <FuncLink name="matrix_slice_cols" color={color} />, <FuncLink name="matrix_concat" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Arithmetic</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_arithmetic" color={color} />, <FuncLink name="matrix_multiplication" color={color} />, <FuncLink name="matrix_scalar_arithmetic" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Statistics</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_min" color={color} />, <FuncLink name="matrix_max" color={color} />, <FuncLink name="matrix_sum" color={color} />, <FuncLink name="matrix_mean" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Column Ops</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="matrix_col_min" color={color} />, <FuncLink name="matrix_col_max" color={color} />, <FuncLink name="matrix_col_sum" color={color} />, <FuncLink name="matrix_col_mean" color={color} />, <FuncLink name="matrix_col_std" color={color} />, <FuncLink name="matrix_col_dot_product" color={color} />, <FuncLink name="matrix_apply_col" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Conversion</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="vector_to_matrix" color={color} />, <FuncLink name="matrix_to_vector" color={color} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

function MatrixCreate({ color }: { color: string }) {
  const implementation = `Matrix *matrix_create(const int rows, const int cols) {
    if (rows < 1 || cols < 1) {
        CUSTOM_ERROR("Invalid matrix dimensions");
        return NULL;
    }
    Matrix *X = malloc(sizeof(Matrix));
    if (!X) {
        ALLOCATION_ERROR();
        return NULL;
    }

    X->rows = rows;
    X->cols = cols;
    X->data = calloc(rows * cols, sizeof(double));

    return X;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_create
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_create</span>(const int rows, const int cols);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Creates a new matrix with the specified dimensions.
            All elements are initialized to <span style={{ color }}>0.0</span> using calloc.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The function allocates memory for both the Matrix
            structure and its data array. Returns <span style={{ color }}>NULL</span> if the
            dimensions are invalid or if memory allocation fails.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>rows</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Number of rows in the matrix. Must be at least 1.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>cols</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Number of columns in the matrix. Must be at least 1.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a pointer to the newly created <span style={{ color }}>Matrix</span> structure.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> rows &lt; 1 or cols &lt; 1 (invalid dimensions)</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_create.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Create a 3x4 matrix
    Matrix *X = matrix_create(3, 4);

    if (X == NULL) {
        printf("Failed to create matrix\\n");
        return 1;
    }

    // All elements are initialized to 0.0
    matrix_print(X);
    // Output:
    // [0.000000, 0.000000, 0.000000, 0.000000]
    // [0.000000, 0.000000, 0.000000, 0.000000]
    // [0.000000, 0.000000, 0.000000, 0.000000]

    // Don't forget to free the memory when done
    matrix_free(X);

    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Always check if the returned pointer is <span style={{ color }}>NULL</span> before using the matrix.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The caller is responsible for freeing the memory using <FuncLink name="matrix_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Uses <span style={{ color }}>calloc</span> instead of malloc to ensure all elements are zero-initialized.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Data is stored in row-major order: element at (i, j) is at index <span style={{ color }}>i * cols + j</span>.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixCopy({ color }: { color: string }) {
  const implementation = `Matrix *matrix_copy(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }

    Matrix* copy = matrix_create(X->rows, X->cols);
    if (!copy) {
        ALLOCATION_ERROR();
        return NULL;
    }
    memcpy(copy->data, X->data, sizeof(double) * X->rows * X->cols);

    return copy;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_copy
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_copy</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Creates a deep copy of an existing matrix.
            All elements are copied to a newly allocated matrix.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The copy is completely independent of the original — modifying
            one does not affect the other.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the source matrix to copy.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a pointer to the newly created copy of the matrix.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Source matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_copy.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 3);
    matrix_set(X, 0, 0, 1.0);
    matrix_set(X, 0, 1, 2.0);
    matrix_set(X, 1, 2, 5.0);

    // Create a copy
    Matrix *Y = matrix_copy(X);

    // Modify the copy
    matrix_set(Y, 0, 0, 99.0);

    // Original is unchanged
    printf("Original: %.1f\\n", matrix_get(X, 0, 0));  // Output: 1.0
    printf("Copy: %.1f\\n", matrix_get(Y, 0, 0));      // Output: 99.0

    // Free both matrices
    matrix_free(X);
    matrix_free(Y);

    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Both the original and the copy must be freed separately using <FuncLink name="matrix_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Internally uses <FuncLink name="matrix_create" color={color} /> to allocate the new matrix.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Uses <span style={{ color }}>memcpy</span> for efficient data copying.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixFree({ color }: { color: string }) {
  const implementation = `void matrix_free(Matrix *X) {
    if (X) {
        free(X->data);
        free(X);
    } else {
        NULL_MATRIX_ERROR();
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_free
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_free</span>(Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Frees all memory associated with a matrix.
            This includes both the data array and the Matrix structure itself.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints an error message if called with a NULL pointer,
            but does not crash.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix to free.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_free.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 3);

    // Use the matrix...
    matrix_set(X, 0, 0, 1.0);
    matrix_set(X, 1, 1, 2.0);

    // Free when done
    matrix_free(X);
    X = NULL;  // Good practice to avoid dangling pointer

    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Passing NULL will trigger an error message but won't crash.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> After freeing, set the pointer to NULL to avoid use-after-free bugs.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Must be called for every matrix created with <FuncLink name="matrix_create" color={color} /> or <FuncLink name="matrix_copy" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixGet({ color }: { color: string }) {
  const implementation = `double matrix_get(const Matrix *X, const int i, const int j) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }
    if (i >= X->rows || j >= X->cols || i < 0 || j < 0) {
        INDEX_ERROR();
        return 0;
    }
    return X->data[i * X->cols + j];
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_get
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_get</span>(const Matrix *X, const int i, const int j);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Retrieves the value at position (i, j) in the matrix.
            Uses 0-based indexing.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Performs bounds checking and returns 0 with an error message
            if the index is out of range.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>i</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Row index (0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>j</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the value at position (i, j) in the matrix.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Index is out of bounds (i &lt; 0, i &gt;= rows, j &lt; 0, or j &gt;= cols)</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_get.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 4);
    matrix_set(X, 1, 2, 42.0);

    double value = matrix_get(X, 1, 2);
    printf("Value at (1, 2): %.1f\\n", value);  // Output: 42.0

    // Out of bounds access returns 0 with error
    double invalid = matrix_get(X, 10, 0);  // Error: Index out of bounds

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Use <FuncLink name="matrix_set" color={color} /> to modify values.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Index bounds are checked before accessing.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Internally accesses <span style={{ color }}>data[i * cols + j]</span> (row-major order).
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixSet({ color }: { color: string }) {
  const implementation = `void matrix_set(Matrix *X, const int i, const int j, const double value) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (i >= X->rows || j >= X->cols || i < 0 || j < 0) {
        INDEX_ERROR();
        return;
    }
    X->data[i * X->cols + j] = value;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_set
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_set</span>(Matrix *X, const int i, const int j, const double value);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Sets the value at position (i, j) in the matrix.
            Uses 0-based indexing.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Performs bounds checking and prints an error message
            if the index is out of range (without modifying the matrix).
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix to modify.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>i</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Row index (0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>j</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>value</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const double</td>
                <td className="px-4 py-3 text-white/70">The value to set at position (i, j).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_set.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 2);

    // Set values to create identity matrix
    matrix_set(X, 0, 0, 1.0);
    matrix_set(X, 1, 1, 1.0);

    matrix_print(X);
    // Output:
    // [1.000000, 0.000000]
    // [0.000000, 1.000000]

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Use <FuncLink name="matrix_get" color={color} /> to retrieve values.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Index bounds are checked before setting.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Internally sets <span style={{ color }}>data[i * cols + j]</span> (row-major order).
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function ReadCsv({ color }: { color: string }) {
  const implementation = `Matrix *read_csv(const char *path, const char separator, const int has_header) {
    if (has_header < 0 || has_header > 1) {
        CUSTOM_ERROR("Property 'has_header' must be 0 or 1");
        return NULL;
    }
    FILE *file = fopen(path, "r");
    if (!file) {
        CUSTOM_ERROR("File %s not found", path);
        return NULL;
    }

    char line[1024];

    // BOM (Byte Order Mark) check for UTF-8 files
    const int c1 = fgetc(file);
    const int c2 = fgetc(file);
    const int c3 = fgetc(file);
    if (!(c1 == 0xEF && c2 == 0xBB && c3 == 0xBF)) {
        rewind(file);
    }

    if (has_header == 1) {
        fgets(line, sizeof(line), file);
    }

    int rows = 0;
    int cols = 0;
    const long data_start = ftell(file);

    while(fgets(line, sizeof(line), file)) {
        if (rows == 0) {
            cols = 1;
            for (int i = 0; line[i] != '\\0' && line[i] != '\\n' && line[i] != '\\r'; i++) {
                if (line[i] == separator) {
                    cols++;
                }
            }
        }
        rows++;
    }

    if (rows == 0 || cols == 0) {
        CUSTOM_ERROR("Empty CSV file");
        fclose(file);
        return NULL;
    }

    Matrix *X = matrix_create(rows, cols);
    if (!X) {
        ALLOCATION_ERROR();
        fclose(file);
        return NULL;
    }

    fseek(file, data_start, SEEK_SET);

    int i = 0;
    while(fgets(line, sizeof(line), file) && i < rows) {
        int j = 0;
        const char sep[2] = {separator, '\\0'};
        const char *token = strtok(line, sep);
        while(token && j < cols) {
            char *endptr;
            errno = 0;
            double val = strtod(token, &endptr);

            if (errno != 0 || endptr == token) {
                CUSTOM_WARNING("Invalid element at [%d,%d], set to 0", i, j);
                val = 0;
            }

            X->data[i * X->cols + j] = val;
            token = strtok(NULL, sep);
            j++;
        }
        i++;
    }

    fclose(file);
    return X;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        read_csv
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>read_csv</span>(const char *path, const char separator, const int has_header);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Reads a CSV file and loads it into a Matrix structure.
            Supports custom separators and optional header row skipping.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The function automatically detects the number of rows and columns
            from the file content.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>path</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const char*</td>
                <td className="px-4 py-3 text-white/70">Path to the CSV file.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>separator</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const char</td>
                <td className="px-4 py-3 text-white/70">Character used to separate values (e.g., ',' or ';' or '\\t').</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>has_header</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">1 if the first row is a header (will be skipped), 0 otherwise.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a pointer to a new Matrix containing the CSV data.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> has_header is not 0 or 1</li>
            <li><span style={{ color }}>{'>'}</span> File cannot be opened</li>
            <li><span style={{ color }}>{'>'}</span> File is empty</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat bom_check.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>BOM (Byte Order Mark)</span> is a special Unicode character
            (U+FEFF) that some programs (like Excel) add at the beginning of UTF-8 files.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In UTF-8, the BOM appears as 3 bytes: <span style={{ color }}>0xEF 0xBB 0xBF</span>
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Problem:</span> If not handled, these bytes become part of the first value,
            causing parsing errors (e.g., "ï»¿value" instead of "value").
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Solution:</span> The function checks the first 3 bytes:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> If BOM is detected → skip these 3 bytes and continue reading</li>
            <li><span style={{ color }}>{'>'}</span> If no BOM → rewind to the beginning of the file</li>
          </ul>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
            <pre className="font-mono text-sm leading-relaxed text-white/80">
              <code>{`// BOM check
const int c1 = fgetc(file);
const int c2 = fgetc(file);
const int c3 = fgetc(file);
if (!(c1 == 0xEF && c2 == 0xBB && c3 == 0xBF)) {
    rewind(file);  // No BOM, go back to start
}`}</code>
            </pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Known issue:</span> This check only handles UTF-8 BOM.
            Other encodings (UTF-16, UTF-32) have different BOMs and are not currently supported.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat read_csv.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

// Example CSV file (data.csv):
// name,age,score
// 25,85.5
// 30,92.0
// 22,78.5

int main() {
    // Read CSV with header row
    Matrix *data = read_csv("data.csv", ',', 1);

    if (data == NULL) {
        printf("Failed to read CSV\\n");
        return 1;
    }

    printf("Loaded matrix: %d rows x %d cols\\n", data->rows, data->cols);
    matrix_print(data);

    matrix_free(data);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Maximum line length is 1024 characters.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Invalid numeric values are set to 0 with a warning.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The caller is responsible for freeing the returned matrix.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Common separators: <span style={{ color }}>,</span> (comma), <span style={{ color }}>;</span> (semicolon), <span style={{ color }}>\t</span> (tab).
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixPrint({ color }: { color: string }) {
  const implementation = `void matrix_print(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }

    const size_t buf_size = X->rows * X->cols * 32 + 64;
    char *buf = malloc(buf_size);
    if (!buf) {
        ALLOCATION_ERROR();
        return;
    }

    char *p = buf;
    p += sprintf(p, "[");
    for (int i = 0; i < X->rows; i++) {
        if (i > 0) p += sprintf(p, "\\n ");
        p += sprintf(p, "[");

        for (int j = 0; j < X->cols; j++) {
            p += sprintf(p, "%.6f", X->data[i * X->cols + j]);
            if (j < X->cols - 1) p += sprintf(p, ", ");
        }
        p += sprintf(p, "]");
    }
    p += sprintf(p, "]\\n");

    fwrite(buf, 1, p - buf, stdout);
    free(buf);
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_print
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_print</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints the entire matrix to stdout in a formatted way.
            Each row is displayed on a new line.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Values are displayed with 6 decimal places.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix to print.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_print.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 3);
    matrix_set(X, 0, 0, 1.0);
    matrix_set(X, 0, 1, 2.0);
    matrix_set(X, 0, 2, 3.0);
    matrix_set(X, 1, 0, 4.0);
    matrix_set(X, 1, 1, 5.0);
    matrix_set(X, 1, 2, 6.0);

    matrix_print(X);
    // Output:
    // [[1.000000, 2.000000, 3.000000]
    //  [4.000000, 5.000000, 6.000000]]

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> For large matrices, use <FuncLink name="matrix_print_head" color={color} /> or <FuncLink name="matrix_print_tail" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Uses buffered output for better performance.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Output format: [[row1], [row2], ...]
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixPrintHead({ color }: { color: string }) {
  const implementation = `void matrix_print_head(const Matrix *X, const int num) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (num < 1 || num > X->rows) {
        INDEX_ERROR();
        return;
    }

    printf("[");
    for (int i = 0; i < num; i++) {
        if (i > 0) printf("\\n ");
        printf("[");
        for (int j = 0; j < X->cols; j++) {
            printf("%.6f", X->data[i * X->cols + j]);
            if (j < X->cols - 1) printf(", ");
        }
        printf("]");
    }
    printf(num == X->rows ? "]\\n" : "...]\\n");
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_print_head
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_print_head</span>(const Matrix *X, const int num);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints the first N rows of the matrix.
            Useful for previewing large datasets.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If N equals the total number of rows, prints without "..." suffix.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>num</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Number of rows to print (1 to rows).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_print_head.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(100, 3);
    // ... fill matrix with data ...

    // Print first 5 rows
    matrix_print_head(X, 5);
    // Output:
    // [[0.000000, 0.000000, 0.000000]
    //  [0.000000, 0.000000, 0.000000]
    //  [0.000000, 0.000000, 0.000000]
    //  [0.000000, 0.000000, 0.000000]
    //  [0.000000, 0.000000, 0.000000]...]

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> See also <FuncLink name="matrix_print_tail" color={color} /> for printing the last N rows.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> If num equals rows, no "..." is shown.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixPrintTail({ color }: { color: string }) {
  const implementation = `void matrix_print_tail(const Matrix *X, const int num) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (num > X->rows || num < 1) {
        INDEX_ERROR();
        return;
    }

    const int start = X->rows - num;

    printf(num == X->rows ? "[" : "[...");
    for (int i = start; i < X->rows; i++) {
        if (i > start) printf("\\n ");
        printf("[");
        for (int j = 0; j < X->cols; j++) {
            printf("%.6f", X->data[i * X->cols + j]);
            if (j < X->cols - 1) printf(", ");
        }
        printf("]");
    }
    printf("]\\n");
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_print_tail
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_print_tail</span>(const Matrix *X, const int num);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints the last N rows of the matrix.
            Useful for checking the end of large datasets.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If N equals the total number of rows, prints without "..." prefix.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>num</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Number of rows to print (1 to rows).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_print_tail.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(100, 3);
    // ... fill matrix with data ...

    // Print last 3 rows
    matrix_print_tail(X, 3);
    // Output:
    // [...[0.000000, 0.000000, 0.000000]
    //  [0.000000, 0.000000, 0.000000]
    //  [0.000000, 0.000000, 0.000000]]

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> See also <FuncLink name="matrix_print_head" color={color} /> for printing the first N rows.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> If num equals rows, no "..." prefix is shown.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixShape({ color }: { color: string }) {
  const implementation = `void matrix_shape(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }

    printf("(%d, %d)", X->rows, X->cols);
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_shape
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_shape</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints the shape (dimensions) of the matrix in the format (rows, cols).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Similar to NumPy's <span style={{ color }}>.shape</span> attribute.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_shape.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 5);

    printf("Shape: ");
    matrix_shape(X);  // Output: (3, 5)
    printf("\\n");

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Use <FuncLink name="matrix_size" color={color} /> to get the total number of elements.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Does not print a newline — add it manually if needed.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixSize({ color }: { color: string }) {
  const implementation = `double matrix_size(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }

    return X->rows * X->cols;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_size
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_size</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the total number of elements in the matrix (rows × cols).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Similar to NumPy's <span style={{ color }}>.size</span> attribute.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the total number of elements (rows × cols) as a double.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if the matrix is NULL.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_size.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 5);

    double size = matrix_size(X);
    printf("Total elements: %.0f\\n", size);  // Output: 15

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Use <FuncLink name="matrix_shape" color={color} /> to print the dimensions.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Returns double to handle very large matrices without overflow.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixTranspose({ color }: { color: string }) {
  const implementation = `Matrix *matrix_transpose(Matrix *X, const int inplace) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (inplace != 0 && inplace != 1) {
        CUSTOM_ERROR("Property 'inplace' must be 0 or 1");
    }

    Matrix* transposed_matrix = matrix_create(X->cols, X->rows);
    if (!transposed_matrix) {
        ALLOCATION_ERROR();
        return NULL;
    }

    for (int i = 0; i < X->rows; i++) {
        for (int j = 0; j < X->cols; j++) {
            transposed_matrix->data[j * transposed_matrix->cols + i] = X->data[i * X->cols + j];
        }
    }

    if (inplace == 1) {
        matrix_free(X);
    }

    return transposed_matrix;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_transpose
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_transpose</span>(Matrix *X, const int inplace);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the transpose of a matrix, swapping rows and columns.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If <span style={{ color }}>inplace = 1</span>, the original matrix is freed after transposition.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>transpose</span> of a matrix A is denoted as Aᵀ (or A').
            It is obtained by interchanging rows and columns.
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>(Aᵀ)ᵢⱼ</span> = Aⱼᵢ
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If A is an m × n matrix, then Aᵀ is an n × m matrix.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`    [ 1  2  3 ]ᵀ     [ 1  4 ]
A = [ 4  5  6 ]   =  [ 2  5 ]
                     [ 3  6 ]`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Properties of transpose:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> (Aᵀ)ᵀ = A (double transpose returns original)</li>
            <li><span style={{ color }}>{'>'}</span> (A + B)ᵀ = Aᵀ + Bᵀ</li>
            <li><span style={{ color }}>{'>'}</span> (kA)ᵀ = kAᵀ (scalar multiplication)</li>
            <li><span style={{ color }}>{'>'}</span> (AB)ᵀ = BᵀAᵀ (reverse order for products)</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> A matrix is <span style={{ color }}>symmetric</span> if A = Aᵀ.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix to transpose.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>inplace</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">1 to free original matrix after transpose, 0 to keep it.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix that is the transpose of X.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_transpose.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Create a 2x3 matrix
    Matrix *A = matrix_create(2, 3);
    matrix_set(A, 0, 0, 1); matrix_set(A, 0, 1, 2); matrix_set(A, 0, 2, 3);
    matrix_set(A, 1, 0, 4); matrix_set(A, 1, 1, 5); matrix_set(A, 1, 2, 6);

    printf("Original (2x3):\\n");
    matrix_print(A);

    // Transpose without freeing original
    Matrix *AT = matrix_transpose(A, 0);

    printf("Transposed (3x2):\\n");
    matrix_print(AT);
    // Output:
    // [[1.000000, 4.000000]
    //  [2.000000, 5.000000]
    //  [3.000000, 6.000000]]

    matrix_free(A);
    matrix_free(AT);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Always creates a new matrix for the result.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> With <span style={{ color }}>inplace = 1</span>, do NOT use the original pointer after calling.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for matrix multiplication dimension alignment.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixInverse({ color }: { color: string }) {
  const implementation = `Matrix *matrix_inverse(Matrix *X, const int inplace) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (X->rows != X->cols) {
        CUSTOM_ERROR("Matrix must be square to invert");
        return NULL;
    }
    if (inplace != 0 && inplace != 1) {
        CUSTOM_ERROR("Property 'inplace' must be 0 or 1");
    }

    const int n = X->rows;

    Matrix *A = matrix_create(n, n);
    if (!A) {
        ALLOCATION_ERROR();
        return NULL;
    }
    Matrix *I = matrix_create(n, n);
    if (!I) {
        ALLOCATION_ERROR();
        matrix_free(A);
        return NULL;
    }

    // Copy X to A, initialize I as identity matrix
    for (int r = 0; r < n; r++) {
        for (int c = 0; c < n; c++) {
            A->data[r * n + c] = X->data[r * n + c];
            I->data[r * n + c] = (r == c) ? 1.0 : 0.0;
        }
    }

    // Gauss-Jordan elimination with partial pivoting
    for (int col = 0; col < n; col++) {
        // Find pivot
        int pivot = col;
        double max_val = fabs(A->data[col * n + col]);

        for (int r = col + 1; r < n; r++) {
            const double val = fabs(A->data[r * n + col]);
            if (val > max_val) {
                max_val = val;
                pivot = r;
            }
        }

        if (max_val < 1e-12) {
            CUSTOM_ERROR("Matrix is singular (not invertible)");
            matrix_free(A);
            matrix_free(I);
            return NULL;
        }

        // Swap rows if needed
        if (pivot != col) {
            for (int c = 0; c < n; c++) {
                double tmp = A->data[col * n + c];
                A->data[col * n + c] = A->data[pivot * n + c];
                A->data[pivot * n + c] = tmp;

                tmp = I->data[col * n + c];
                I->data[col * n + c] = I->data[pivot * n + c];
                I->data[pivot * n + c] = tmp;
            }
        }

        // Scale pivot row
        const double pivot_val = A->data[col * n + col];
        for (int c = 0; c < n; c++) {
            A->data[col * n + c] /= pivot_val;
            I->data[col * n + c] /= pivot_val;
        }

        // Eliminate column
        for (int r = 0; r < n; r++) {
            if (r == col) continue;

            const double factor = A->data[r * n + col];

            for (int c = 0; c < n; c++) {
                A->data[r * n + c] -= factor * A->data[col * n + c];
                I->data[r * n + c] -= factor * I->data[col * n + c];
            }
        }
    }

    matrix_free(A);
    if (inplace == 1) {
        matrix_free(X);
    }
    return I;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_inverse
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_inverse</span>(Matrix *X, const int inplace);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the inverse of a square matrix using Gauss-Jordan elimination
            with partial pivoting.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If <span style={{ color }}>inplace = 1</span>, the original matrix is freed after inversion.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>inverse</span> of a square matrix A is denoted as A⁻¹.
            It satisfies the equation:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>A × A⁻¹</span> = A⁻¹ × A = <span style={{ color }}>I</span> (identity matrix)
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Existence conditions:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix must be <span style={{ color }}>square</span> (n × n)</li>
            <li><span style={{ color }}>{'>'}</span> Matrix must be <span style={{ color }}>non-singular</span> (det(A) ≠ 0)</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example (2×2 matrix):
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`    [ a  b ]         1      [  d  -b ]
A = [ c  d ]   A⁻¹ = ───── × [ -c   a ]
                    ad-bc`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Where <span style={{ color }}>ad - bc</span> is the determinant. If det = 0, the matrix is singular.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Properties of inverse:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> (A⁻¹)⁻¹ = A</li>
            <li><span style={{ color }}>{'>'}</span> (AB)⁻¹ = B⁻¹A⁻¹ (reverse order)</li>
            <li><span style={{ color }}>{'>'}</span> (Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>
            <li><span style={{ color }}>{'>'}</span> (kA)⁻¹ = (1/k)A⁻¹ for scalar k ≠ 0</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Algorithm: Gauss-Jordan Elimination</span>
          </p>
          <p className="mt-2 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The algorithm augments [A | I] and transforms it to [I | A⁻¹] using:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Partial pivoting — finds the largest element in each column to improve numerical stability</li>
            <li><span style={{ color }}>{'>'}</span> Row scaling — divides each pivot row to make the diagonal element 1</li>
            <li><span style={{ color }}>{'>'}</span> Row elimination — zeros out all other elements in the pivot column</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the square matrix to invert.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>inplace</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">1 to free original matrix after inversion, 0 to keep it.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix that is the inverse of X.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Matrix is not square (rows ≠ cols)</li>
            <li><span style={{ color }}>{'>'}</span> Matrix is singular (determinant ≈ 0)</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_inverse.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Create a 2x2 matrix
    Matrix *A = matrix_create(2, 2);
    matrix_set(A, 0, 0, 4); matrix_set(A, 0, 1, 7);
    matrix_set(A, 1, 0, 2); matrix_set(A, 1, 1, 6);

    printf("Original:\\n");
    matrix_print(A);

    // Compute inverse
    Matrix *A_inv = matrix_inverse(A, 0);

    if (A_inv) {
        printf("Inverse:\\n");
        matrix_print(A_inv);

        // Verify: A * A_inv should equal identity
        Matrix *I = matrix_multiplication(A, A_inv);
        printf("A * A_inv (should be identity):\\n");
        matrix_print(I);

        matrix_free(I);
        matrix_free(A_inv);
    }

    matrix_free(A);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Only works on <span style={{ color }}>square matrices</span>.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Uses threshold of <span style={{ color }}>1e-12</span> to detect singular matrices.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Partial pivoting improves numerical stability.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> With <span style={{ color }}>inplace = 1</span>, do NOT use the original pointer after calling.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Commonly used in solving linear systems: x = A⁻¹b
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixSlice({ color }: { color: string }) {
  const implementation = `Matrix *matrix_slice(const Matrix *X, const int i_start, const int i_end, const int j_start, const int j_end) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (i_start < 0 || i_end < 0 || i_start >= X->rows || i_end > X->rows || i_start >= i_end) {
        INDEX_ERROR();
        return NULL;
    }
    if (j_start < 0 || j_end < 0 || j_start >= X->cols || j_end > X->cols || j_start >= j_end) {
        INDEX_ERROR();
        return NULL;
    }

    const int rows = i_end - i_start;
    const int cols = j_end - j_start;
    Matrix* slice = matrix_create(rows, cols);
    if (!slice) {
        ALLOCATION_ERROR();
        return NULL;
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            slice->data[i * slice->cols + j] = X->data[(i_start + i) * X->cols + (j_start + j)];
        }
    }
    return slice;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_slice
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_slice</span>(const Matrix *X, const int i_start, const int i_end, const int j_start, const int j_end);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Extracts a rectangular submatrix from the original matrix.
            Uses Python-style slicing where the end index is exclusive.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The slice includes rows [i_start, i_end) and columns [j_start, j_end).
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the source matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>i_start</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Starting row index (inclusive, 0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>i_end</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Ending row index (exclusive).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>j_start</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Starting column index (inclusive, 0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>j_end</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Ending column index (exclusive).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix containing the sliced portion.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Row indices are out of bounds or invalid (start {'>'}= end)</li>
            <li><span style={{ color }}>{'>'}</span> Column indices are out of bounds or invalid (start {'>'}= end)</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_slice.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Create a 4x4 matrix
    Matrix *X = matrix_create(4, 4);
    for (int i = 0; i < 4; i++)
        for (int j = 0; j < 4; j++)
            matrix_set(X, i, j, i * 4 + j + 1);

    printf("Original 4x4:\\n");
    matrix_print(X);
    // [[1, 2, 3, 4]
    //  [5, 6, 7, 8]
    //  [9, 10, 11, 12]
    //  [13, 14, 15, 16]]

    // Slice rows 1-3, columns 1-3 (2x2 center)
    Matrix *center = matrix_slice(X, 1, 3, 1, 3);
    printf("Center 2x2 slice:\\n");
    matrix_print(center);
    // [[6, 7]
    //  [10, 11]]

    matrix_free(X);
    matrix_free(center);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Uses Python-style slicing: <span style={{ color }}>[start, end)</span> — end is exclusive.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For row-only slicing, use <FuncLink name="matrix_slice_rows" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For column-only slicing, use <FuncLink name="matrix_slice_cols" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Creates a new matrix — caller must free it.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixSliceRows({ color }: { color: string }) {
  const implementation = `Matrix *matrix_slice_rows(const Matrix *X, const int start, const int end) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (start < 0 || end < 0 || start >= X->rows || end > X->rows || start >= end) {
        INDEX_ERROR();
        return NULL;
    }

    const int rows = end - start;
    Matrix* slice = matrix_create(rows, X->cols);
    if (!slice) {
        ALLOCATION_ERROR();
        return NULL;
    }

    for (int i = 0; i < rows; i++) {
        memcpy(slice->data + i * X->cols, X->data + (start + i) * X->cols, sizeof(double) * X->cols);
    }
    return slice;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_slice_rows
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_slice_rows</span>(const Matrix *X, const int start, const int end);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Extracts a range of rows from the matrix, keeping all columns.
            Equivalent to X[start:end, :] in NumPy.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Uses <span style={{ color }}>memcpy</span> for efficient row copying.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the source matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>start</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Starting row index (inclusive, 0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>end</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Ending row index (exclusive).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix with (end - start) rows and all columns.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Indices are out of bounds or invalid</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_slice_rows.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Load dataset
    Matrix *data = read_csv("dataset.csv", ',', 1);

    // Split into train (first 80%) and test (last 20%)
    int split = (int)(data->rows * 0.8);

    Matrix *train = matrix_slice_rows(data, 0, split);
    Matrix *test = matrix_slice_rows(data, split, data->rows);

    printf("Train: %d rows\\n", train->rows);
    printf("Test: %d rows\\n", test->rows);

    matrix_free(data);
    matrix_free(train);
    matrix_free(test);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> More efficient than <FuncLink name="matrix_slice" color={color} /> for row-only operations.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for train/test splitting in ML.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For column slicing, use <FuncLink name="matrix_slice_cols" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixSliceCols({ color }: { color: string }) {
  const implementation = `Matrix *matrix_slice_cols(const Matrix *X, const int start, const int end) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (start < 0 || end < 0 || start >= X->cols || end > X->cols || start >= end) {
        INDEX_ERROR();
        return NULL;
    }

    const int cols = end - start;
    Matrix* slice = matrix_create(X->rows, cols);
    if (!slice) {
        ALLOCATION_ERROR();
        return NULL;
    }

    for (int i = 0; i < X->rows; i++) {
        for (int j = 0; j < cols; j++) {
            slice->data[i * cols + j] = X->data[i * X->cols + start + j];
        }
    }
    return slice;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_slice_cols
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_slice_cols</span>(const Matrix *X, const int start, const int end);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Extracts a range of columns from the matrix, keeping all rows.
            Equivalent to X[:, start:end] in NumPy.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Useful for selecting features from a dataset.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the source matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>start</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Starting column index (inclusive, 0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>end</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Ending column index (exclusive).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix with all rows and (end - start) columns.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Indices are out of bounds or invalid</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_slice_cols.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Dataset with features + target column
    // Columns: [feature1, feature2, feature3, target]
    Matrix *data = read_csv("dataset.csv", ',', 1);

    // Separate features (all but last column) and target (last column)
    Matrix *X = matrix_slice_cols(data, 0, data->cols - 1);
    Matrix *y = matrix_slice_cols(data, data->cols - 1, data->cols);

    printf("Features: %d cols\\n", X->cols);  // 3 features
    printf("Target: %d cols\\n", y->cols);    // 1 target

    matrix_free(data);
    matrix_free(X);
    matrix_free(y);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Useful for separating features (X) from targets (y) in ML.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For row slicing, use <FuncLink name="matrix_slice_rows" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For both rows and columns, use <FuncLink name="matrix_slice" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixConcat({ color }: { color: string }) {
  const implementation = `Matrix *matrix_concat(const Matrix *A, const Matrix *B) {
    if (!A || !B) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (A->rows != B->rows) {
        CUSTOM_ERROR("Matrix row dimensions must match");
        return NULL;
    }

    const int cols = A->cols + B->cols;
    Matrix* C = matrix_create(A->rows, cols);
    if (!C) {
        ALLOCATION_ERROR();
        return NULL;
    }

    for (int i = 0; i < A->rows; i++) {
        memcpy(C->data + i * cols, A->data + i * A->cols, sizeof(double) * A->cols);
        memcpy(C->data + i * cols + A->cols, B->data + i * B->cols, sizeof(double) * B->cols);
    }

    return C;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_concat
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_concat</span>(const Matrix *A, const Matrix *B);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Concatenates two matrices horizontally (column-wise).
            The result has the same number of rows, with columns from A followed by columns from B.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Both matrices must have the same number of rows.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Horizontal concatenation</span> (also called column binding or hstack):
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`If A is m × n and B is m × p:

C = [A | B] is m × (n + p)

[ a₁₁ ... a₁ₙ | b₁₁ ... b₁ₚ ]
[ a₂₁ ... a₂ₙ | b₂₁ ... b₂ₚ ]
[ ...     ... | ...     ... ]
[ aₘ₁ ... aₘₙ | bₘ₁ ... bₘₚ ]`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`A = [ 1  2 ]    B = [ 5  6 ]    C = [ 1  2  5  6 ]
    [ 3  4 ]        [ 7  8 ]        [ 3  4  7  8 ]`}</pre>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>A</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">First matrix (left side).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>B</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Second matrix (right side). Must have same rows as A.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix with dimensions (A.rows × (A.cols + B.cols)).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Either matrix is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Row dimensions don't match (A.rows ≠ B.rows)</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_concat.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Features matrix
    Matrix *X = matrix_create(3, 2);
    matrix_set(X, 0, 0, 1); matrix_set(X, 0, 1, 2);
    matrix_set(X, 1, 0, 3); matrix_set(X, 1, 1, 4);
    matrix_set(X, 2, 0, 5); matrix_set(X, 2, 1, 6);

    // Bias column (all 1s)
    Matrix *bias = matrix_create(3, 1);
    matrix_set(bias, 0, 0, 1);
    matrix_set(bias, 1, 0, 1);
    matrix_set(bias, 2, 0, 1);

    // Concatenate: [X | bias]
    Matrix *X_with_bias = matrix_concat(X, bias);

    printf("X with bias column:\\n");
    matrix_print(X_with_bias);
    // [[1, 2, 1]
    //  [3, 4, 1]
    //  [5, 6, 1]]

    matrix_free(X);
    matrix_free(bias);
    matrix_free(X_with_bias);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Performs <span style={{ color }}>horizontal</span> (column-wise) concatenation.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Common use: adding bias column to feature matrix.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Uses <span style={{ color }}>memcpy</span> for efficient row copying.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For vertical (row-wise) concatenation, slice and copy manually.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixArithmetic({ color }: { color: string }) {
  const implementation = `Matrix *matrix_arithmetic(const Matrix *A, const Matrix *B, const char op) {
    if (!A || !B) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (A->cols != B->cols || A->rows != B->rows) {
        CUSTOM_ERROR("Matrix dimensions must match");
        return NULL;
    }

    Matrix* C = matrix_create(A->rows, A->cols);
    if (!C) {
        ALLOCATION_ERROR();
        return NULL;
    }

    const int size = A->rows * A->cols;
    switch (op) {
        case '+':
            for (int i = 0; i < size; i++)
                C->data[i] = A->data[i] + B->data[i];
            break;
        case '-':
            for (int i = 0; i < size; i++)
                C->data[i] = A->data[i] - B->data[i];
            break;
        case '*':
            for (int i = 0; i < size; i++)
                C->data[i] = A->data[i] * B->data[i];
            break;
        case '/':
            for (int i = 0; i < size; i++) {
                if (B->data[i] == 0) {
                    CUSTOM_WARNING("Division by zero detected at [%d,%d], set to 0", i / A->cols, i % A->cols);
                    C->data[i] = 0;
                } else {
                    C->data[i] = A->data[i] / B->data[i];
                }
            }
            break;
        default:
            CUSTOM_ERROR("Invalid operator");
            matrix_free(C);
            return NULL;
    }
    return C;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_arithmetic
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_arithmetic</span>(const Matrix *A, const Matrix *B, char op);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Performs <span style={{ color }}>element-wise</span> arithmetic operations between two matrices.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Supports addition (+), subtraction (-), multiplication (*), and division (/).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Both matrices must have identical dimensions.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Element-wise operations</span> (also called Hadamard operations) apply
            an operation to corresponding elements of two matrices.
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`For matrices A and B of size m × n:

(A ⊕ B)ᵢⱼ = Aᵢⱼ ⊕ Bᵢⱼ   where ⊕ ∈ {+, -, *, /}`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Element-wise Addition (A + B):</span>
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`[ 1  2 ]   [ 5  6 ]   [ 1+5  2+6 ]   [ 6   8 ]
[ 3  4 ] + [ 7  8 ] = [ 3+7  4+8 ] = [ 10  12 ]`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Element-wise Subtraction (A - B):</span>
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`[ 5  6 ]   [ 1  2 ]   [ 5-1  6-2 ]   [ 4  4 ]
[ 7  8 ] - [ 3  4 ] = [ 7-3  8-4 ] = [ 4  4 ]`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Hadamard Product (A ⊙ B):</span> Element-wise multiplication
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`[ 1  2 ]   [ 5  6 ]   [ 1×5  2×6 ]   [  5  12 ]
[ 3  4 ] ⊙ [ 7  8 ] = [ 3×7  4×8 ] = [ 21  32 ]`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Note: This is different from standard matrix multiplication!
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Element-wise Division (A ⊘ B):</span>
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`[ 10  20 ]   [ 2  4 ]   [ 10/2  20/4 ]   [ 5  5 ]
[ 30  40 ] ⊘ [ 5  8 ] = [ 30/5  40/8 ] = [ 6  5 ]`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Properties:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Addition and multiplication are commutative: A + B = B + A, A ⊙ B = B ⊙ A</li>
            <li><span style={{ color }}>{'>'}</span> Subtraction and division are not commutative</li>
            <li><span style={{ color }}>{'>'}</span> All operations are associative with same operation type</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>A</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">First operand matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>B</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Second operand matrix. Must have same dimensions as A.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>op</td>
                <td className="border-r border-white px-4 py-3 text-white/70">char</td>
                <td className="px-4 py-3 text-white/70">Operator: '+', '-', '*', or '/'.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix containing the element-wise result.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Either matrix is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Dimensions don't match</li>
            <li><span style={{ color }}>{'>'}</span> Invalid operator provided</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_arithmetic.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *A = matrix_create(2, 2);
    matrix_set(A, 0, 0, 1); matrix_set(A, 0, 1, 2);
    matrix_set(A, 1, 0, 3); matrix_set(A, 1, 1, 4);

    Matrix *B = matrix_create(2, 2);
    matrix_set(B, 0, 0, 5); matrix_set(B, 0, 1, 6);
    matrix_set(B, 1, 0, 7); matrix_set(B, 1, 1, 8);

    // Element-wise addition
    Matrix *sum = matrix_arithmetic(A, B, '+');
    printf("A + B:\\n");
    matrix_print(sum);
    // [[6, 8]
    //  [10, 12]]

    // Element-wise multiplication (Hadamard product)
    Matrix *hadamard = matrix_arithmetic(A, B, '*');
    printf("A * B (element-wise):\\n");
    matrix_print(hadamard);
    // [[5, 12]
    //  [21, 32]]

    matrix_free(A);
    matrix_free(B);
    matrix_free(sum);
    matrix_free(hadamard);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> For division, division by zero results in <span style={{ color }}>0</span> with a warning message.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The '*' operator performs <span style={{ color }}>element-wise</span> multiplication, not matrix multiplication.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For standard matrix multiplication, use <FuncLink name="matrix_multiplication" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Common in neural networks for gradient computations and activation masks.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixMultiplication({ color }: { color: string }) {
  const implementation = `// TODO: try faster multiply (strassen? winograd)
Matrix *matrix_multiplication(const Matrix *A, const Matrix *B) {
    if (!A || !B) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (A->cols != B->rows) {
        CUSTOM_ERROR("Incompatible dimensions for multiplication");
        return NULL;
    }

    Matrix* C = matrix_create(A->rows, B->cols);
    if (!C) {
        ALLOCATION_ERROR();
        return NULL;
    }

    const int m = A->rows;
    const int n = A->cols;
    const int p = B->cols;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < p; j++) {
            double sum = 0;
            for (int k = 0; k < n; k++) {
                sum += A->data[i * n + k] * B->data[k * p + j];
            }
            C->data[i * p + j] = sum;
        }
    }

    return C;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_multiplication
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>matrix_multiplication</span>(const Matrix *A, const Matrix *B);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Performs standard <span style={{ color }}>matrix multiplication</span> (dot product) of two matrices.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The number of columns in A must equal the number of rows in B.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Matrix multiplication</span> (also called matrix product or dot product)
            combines two matrices to produce a third matrix.
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`If A is m × n and B is n × p, then C = A × B is m × p

           n
Cᵢⱼ = Σ  Aᵢₖ × Bₖⱼ
          k=1`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Each element Cᵢⱼ is the <span style={{ color }}>dot product</span> of row i of A and column j of B:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`         [ b₁ⱼ ]
[ aᵢ₁ aᵢ₂ ... aᵢₙ ] × [ b₂ⱼ ] = aᵢ₁×b₁ⱼ + aᵢ₂×b₂ⱼ + ... + aᵢₙ×bₙⱼ
                       [ ... ]
                       [ bₙⱼ ]`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`    [ 1  2 ]       [ 5  6 ]
A = [ 3  4 ]   B = [ 7  8 ]

C = A × B:

C₁₁ = 1×5 + 2×7 = 5 + 14 = 19
C₁₂ = 1×6 + 2×8 = 6 + 16 = 22
C₂₁ = 3×5 + 4×7 = 15 + 28 = 43
C₂₂ = 3×6 + 4×8 = 18 + 32 = 50

    [ 19  22 ]
C = [ 43  50 ]`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Properties:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>NOT commutative:</span> A × B ≠ B × A (in general)</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Associative:</span> (A × B) × C = A × (B × C)</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Distributive:</span> A × (B + C) = A × B + A × C</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Identity:</span> A × I = I × A = A</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Transpose:</span> (A × B)ᵀ = Bᵀ × Aᵀ</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Dimension rule:</span>
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            (m × <span style={{ color }}>n</span>) × (<span style={{ color }}>n</span> × p) = (m × p)
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The inner dimensions must match. The result has the outer dimensions.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>A</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Left matrix (m × n).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>B</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Right matrix (n × p). A.cols must equal B.rows.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new matrix of dimensions (A.rows × B.cols).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Either matrix is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Dimensions are incompatible (A.cols ≠ B.rows)</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_multiplication.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    // Create a 2x3 matrix A
    Matrix *A = matrix_create(2, 3);
    matrix_set(A, 0, 0, 1); matrix_set(A, 0, 1, 2); matrix_set(A, 0, 2, 3);
    matrix_set(A, 1, 0, 4); matrix_set(A, 1, 1, 5); matrix_set(A, 1, 2, 6);

    // Create a 3x2 matrix B
    Matrix *B = matrix_create(3, 2);
    matrix_set(B, 0, 0, 7);  matrix_set(B, 0, 1, 8);
    matrix_set(B, 1, 0, 9);  matrix_set(B, 1, 1, 10);
    matrix_set(B, 2, 0, 11); matrix_set(B, 2, 1, 12);

    // Multiply: C = A × B (2x3 × 3x2 = 2x2)
    Matrix *C = matrix_multiplication(A, B);

    printf("A (2x3):\\n");
    matrix_print(A);

    printf("B (3x2):\\n");
    matrix_print(B);

    printf("C = A × B (2x2):\\n");
    matrix_print(C);
    // [[58, 64]
    //  [139, 154]]
    // C₁₁ = 1×7 + 2×9 + 3×11 = 7 + 18 + 33 = 58

    matrix_free(A);
    matrix_free(B);
    matrix_free(C);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Uses the naive O(n³) algorithm. Future versions may implement Strassen or Winograd.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For element-wise multiplication, use <FuncLink name="matrix_arithmetic" color={color} /> with '*'.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Essential for neural network forward/backward passes.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Used in linear regression: <span style={{ color }}>β = (XᵀX)⁻¹Xᵀy</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixScalarArithmetic({ color }: { color: string }) {
  const implementation = `void matrix_scalar_arithmetic(Matrix *X, const double scalar, const char op) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }

    const int size = X->rows * X->cols;
    switch (op) {
        case '+':
            for (int i = 0; i < size; i++)
                X->data[i] += scalar;
            break;
        case '-':
            for (int i = 0; i < size; i++)
                X->data[i] -= scalar;
            break;
        case '*':
            for (int i = 0; i < size; i++)
                X->data[i] *= scalar;
            break;
        case '/':
            if (scalar == 0) {
                CUSTOM_ERROR("Division by zero is not allowed");
                return;
            }
            for (int i = 0; i < size; i++)
                X->data[i] /= scalar;
            break;
        default:
            CUSTOM_ERROR("Invalid operator");
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_scalar_arithmetic
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_scalar_arithmetic</span>(Matrix *X, double scalar, char op);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Performs <span style={{ color }}>in-place</span> arithmetic operation between a matrix and a scalar value.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Supports addition (+), subtraction (-), multiplication (*), and division (/).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Modifies the matrix directly without creating a new one.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Scalar operations</span> apply a single value to every element of a matrix.
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`For matrix A and scalar k:

(A ⊕ k)ᵢⱼ = Aᵢⱼ ⊕ k   where ⊕ ∈ {+, -, *, /}`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Scalar Addition:</span>
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`[ 1  2 ]       [ 1+3  2+3 ]   [ 4  5 ]
[ 3  4 ] + 3 = [ 3+3  4+3 ] = [ 6  7 ]`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Scalar Multiplication:</span>
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`[ 1  2 ]       [ 1×2  2×2 ]   [ 2  4 ]
[ 3  4 ] × 2 = [ 3×2  4×2 ] = [ 6  8 ]`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Also known as <span style={{ color }}>scalar multiplication</span> or scaling a matrix.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Properties of scalar multiplication:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> k(A + B) = kA + kB (distributive over matrix addition)</li>
            <li><span style={{ color }}>{'>'}</span> (k + m)A = kA + mA (distributive over scalar addition)</li>
            <li><span style={{ color }}>{'>'}</span> k(mA) = (km)A (associative)</li>
            <li><span style={{ color }}>{'>'}</span> 1 × A = A (identity)</li>
            <li><span style={{ color }}>{'>'}</span> (kA)ᵀ = kAᵀ</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Common uses in ML:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Learning rate scaling: W = W - α∇W</li>
            <li><span style={{ color }}>{'>'}</span> Normalization: X = (X - μ) / σ</li>
            <li><span style={{ color }}>{'>'}</span> Regularization scaling</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Matrix to modify (in-place).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>scalar</td>
                <td className="border-r border-white px-4 py-3 text-white/70">double</td>
                <td className="px-4 py-3 text-white/70">The scalar value to apply.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>op</td>
                <td className="border-r border-white px-4 py-3 text-white/70">char</td>
                <td className="px-4 py-3 text-white/70">Operator: '+', '-', '*', or '/'.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>. The matrix is modified in-place.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> No operation performed if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Division by zero attempted</li>
            <li><span style={{ color }}>{'>'}</span> Invalid operator provided</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_scalar_arithmetic.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 2);
    matrix_set(X, 0, 0, 1); matrix_set(X, 0, 1, 2);
    matrix_set(X, 1, 0, 3); matrix_set(X, 1, 1, 4);

    printf("Original:\\n");
    matrix_print(X);

    // Scale by 2
    matrix_scalar_arithmetic(X, 2, '*');
    printf("After × 2:\\n");
    matrix_print(X);
    // [[2, 4]
    //  [6, 8]]

    // Subtract 1 from all elements
    matrix_scalar_arithmetic(X, 1, '-');
    printf("After - 1:\\n");
    matrix_print(X);
    // [[1, 3]
    //  [5, 7]]

    // Divide by 2
    matrix_scalar_arithmetic(X, 2, '/');
    printf("After / 2:\\n");
    matrix_print(X);
    // [[0.5, 1.5]
    //  [2.5, 3.5]]

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Operates <span style={{ color }}>in-place</span> — the original matrix is modified.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Division by zero is prevented with an error message.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Efficient for weight updates: <span style={{ color }}>W -= learning_rate * gradient</span>
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For normalization, combine with <FuncLink name="matrix_col_mean" color={color} /> and <FuncLink name="matrix_col_std" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixMin({ color }: { color: string }) {
  const implementation = `double matrix_min(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }

    const int size = X->rows * X->cols;
    double min = X->data[0];
    for (int i = 1; i < size; i++) {
        if (X->data[i] < min) {
            min = X->data[i];
        }
    }

    return min;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_min
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_min</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Finds the <span style={{ color }}>minimum value</span> across all elements in the matrix.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the minimum value in the matrix.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_min.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 3);
    matrix_set(X, 0, 0, 5); matrix_set(X, 0, 1, 2); matrix_set(X, 0, 2, 8);
    matrix_set(X, 1, 0, 1); matrix_set(X, 1, 1, 9); matrix_set(X, 1, 2, 3);

    double min = matrix_min(X);
    printf("Min: %f\\n", min);  // Output: 1.000000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Iterates through all elements in O(m×n) time.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for data normalization (min-max scaling).
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixMax({ color }: { color: string }) {
  const implementation = `double matrix_max(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }

    const int size = X->rows * X->cols;
    double max = X->data[0];
    for (int i = 1; i < size; i++) {
        if (X->data[i] > max) {
            max = X->data[i];
        }
    }

    return max;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_max
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_max</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Finds the <span style={{ color }}>maximum value</span> across all elements in the matrix.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the maximum value in the matrix.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_max.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 3);
    matrix_set(X, 0, 0, 5); matrix_set(X, 0, 1, 2); matrix_set(X, 0, 2, 8);
    matrix_set(X, 1, 0, 1); matrix_set(X, 1, 1, 9); matrix_set(X, 1, 2, 3);

    double max = matrix_max(X);
    printf("Max: %f\\n", max);  // Output: 9.000000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Iterates through all elements in O(m×n) time.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for data normalization (min-max scaling).
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixSum({ color }: { color: string }) {
  const implementation = `double matrix_sum(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }

    double sum = 0;
    const int size = X->rows * X->cols;
    for (int i = 0; i < size; i++) {
        sum += X->data[i];
    }

    return sum;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_sum
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_sum</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the <span style={{ color }}>sum</span> of all elements in the matrix.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the sum of all elements.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_sum.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 3);
    matrix_set(X, 0, 0, 1); matrix_set(X, 0, 1, 2); matrix_set(X, 0, 2, 3);
    matrix_set(X, 1, 0, 4); matrix_set(X, 1, 1, 5); matrix_set(X, 1, 2, 6);

    double sum = matrix_sum(X);
    printf("Sum: %f\\n", sum);  // Output: 21.000000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Iterates through all elements in O(m×n) time.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for computing loss functions and aggregations.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixMean({ color }: { color: string }) {
  const implementation = `double matrix_mean(const Matrix *X) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }

    double sum = 0;
    const int size = X->rows * X->cols;
    for (int i = 0; i < size; i++) {
        sum += X->data[i];
    }

    return sum / size;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_mean
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_mean</span>(const Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the <span style={{ color }}>arithmetic mean</span> of all elements in the matrix.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the mean (sum / count) of all elements.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_mean.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(2, 3);
    matrix_set(X, 0, 0, 1); matrix_set(X, 0, 1, 2); matrix_set(X, 0, 2, 3);
    matrix_set(X, 1, 0, 4); matrix_set(X, 1, 1, 5); matrix_set(X, 1, 2, 6);

    double mean = matrix_mean(X);
    printf("Mean: %f\\n", mean);  // Output: 3.500000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Computes sum / (rows × cols).
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for centering data and computing MSE.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixColMin({ color }: { color: string }) {
  const implementation = `double matrix_col_min(const Matrix *X, const int col) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }
    if (col < 0 || col >= X->cols) {
        INDEX_ERROR();
        return 0;
    }

    const int n = X->rows;
    const int stride = X->cols;
    double min = X->data[col];
    for (int i = 1; i < n; i++) {
        const double val = X->data[i * stride + col];
        if (val < min) min = val;
    }

    return min;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_col_min
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_col_min</span>(const Matrix *X, int col);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Finds the <span style={{ color }}>minimum value</span> in a specific column.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the minimum value in the specified column.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL or column index is out of bounds.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_col_min.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 2);
    matrix_set(X, 0, 0, 5); matrix_set(X, 0, 1, 2);
    matrix_set(X, 1, 0, 1); matrix_set(X, 1, 1, 8);
    matrix_set(X, 2, 0, 3); matrix_set(X, 2, 1, 4);

    printf("Col 0 min: %f\\n", matrix_col_min(X, 0));  // Output: 1.000000
    printf("Col 1 min: %f\\n", matrix_col_min(X, 1));  // Output: 2.000000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Iterates through column elements in O(m) time.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for per-feature normalization.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixColMax({ color }: { color: string }) {
  const implementation = `double matrix_col_max(const Matrix *X, const int col) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }
    if (col < 0 || col >= X->cols) {
        INDEX_ERROR();
        return 0;
    }

    const int n = X->rows;
    const int stride = X->cols;
    double max = X->data[col];
    for (int i = 1; i < n; i++) {
        const double val = X->data[i * stride + col];
        if (val > max) max = val;
    }

    return max;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_col_max
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_col_max</span>(const Matrix *X, int col);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Finds the <span style={{ color }}>maximum value</span> in a specific column.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the maximum value in the specified column.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL or column index is out of bounds.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_col_max.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 2);
    matrix_set(X, 0, 0, 5); matrix_set(X, 0, 1, 2);
    matrix_set(X, 1, 0, 1); matrix_set(X, 1, 1, 8);
    matrix_set(X, 2, 0, 3); matrix_set(X, 2, 1, 4);

    printf("Col 0 max: %f\\n", matrix_col_max(X, 0));  // Output: 5.000000
    printf("Col 1 max: %f\\n", matrix_col_max(X, 1));  // Output: 8.000000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Iterates through column elements in O(m) time.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for per-feature normalization.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixColSum({ color }: { color: string }) {
  const implementation = `double matrix_col_sum(const Matrix *X, const int col) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }
    if (col < 0 || col >= X->cols) {
        INDEX_ERROR();
        return 0;
    }

    double sum = 0;
    const int stride = X->cols;
    for (int i = 0; i < X->rows; i++) {
        sum += X->data[i * stride + col];
    }

    return sum;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_col_sum
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_col_sum</span>(const Matrix *X, int col);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the <span style={{ color }}>sum</span> of all elements in a specific column.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the sum of all elements in the specified column.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL or column index is out of bounds.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_col_sum.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 2);
    matrix_set(X, 0, 0, 1); matrix_set(X, 0, 1, 2);
    matrix_set(X, 1, 0, 3); matrix_set(X, 1, 1, 4);
    matrix_set(X, 2, 0, 5); matrix_set(X, 2, 1, 6);

    printf("Col 0 sum: %f\\n", matrix_col_sum(X, 0));  // Output: 9.000000
    printf("Col 1 sum: %f\\n", matrix_col_sum(X, 1));  // Output: 12.000000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Iterates through column elements in O(m) time.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for computing feature totals.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixColMean({ color }: { color: string }) {
  const implementation = `double matrix_col_mean(const Matrix *X, const int col) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }
    if (col < 0 || col >= X->cols) {
        INDEX_ERROR();
        return 0;
    }

    double sum = 0;
    const int stride = X->cols;
    for (int i = 0; i < X->rows; i++) {
        sum += X->data[i * stride + col];
    }

    return sum / X->rows;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_col_mean
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_col_mean</span>(const Matrix *X, int col);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the <span style={{ color }}>arithmetic mean</span> of all elements in a specific column.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the mean of all elements in the specified column.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL or column index is out of bounds.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_col_mean.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(3, 2);
    matrix_set(X, 0, 0, 1); matrix_set(X, 0, 1, 2);
    matrix_set(X, 1, 0, 4); matrix_set(X, 1, 1, 5);
    matrix_set(X, 2, 0, 7); matrix_set(X, 2, 1, 8);

    printf("Col 0 mean: %f\\n", matrix_col_mean(X, 0));  // Output: 4.000000
    printf("Col 1 mean: %f\\n", matrix_col_mean(X, 1));  // Output: 5.000000

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Computes sum / rows for the column.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Essential for feature-wise standardization.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixColStd({ color }: { color: string }) {
  const implementation = `double matrix_col_std(const Matrix *X, const int col, const int ddof) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return 0;
    }
    if (col < 0 || col >= X->cols) {
        INDEX_ERROR();
        return 0;
    }
    if (ddof != 0 && ddof != 1) {
        CUSTOM_ERROR("Property 'ddof' must be 0 or 1");
    }

    const int n = X->rows;
    const int stride = X->cols;
    double mean = 0;

    for (int i = 0; i < n; i++) {
        mean += X->data[i * stride + col];
    }
    mean /= n;

    double var = 0;
    for (int i = 0; i < n; i++) {
        const double diff = X->data[i * stride + col] - mean;
        var += diff * diff;
    }

    if (ddof == 0) {
        var /= n;
    } else {
        var /= n - 1;
    }
    return sqrt(var);
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_col_std
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_col_std</span>(const Matrix *X, int col, int ddof);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the <span style={{ color }}>standard deviation</span> of all elements in a specific column.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>ddof</span> parameter controls the divisor (n or n-1).
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>ddof</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Delta degrees of freedom: 0 for population, 1 for sample.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the standard deviation of the specified column.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if matrix is NULL or column index is out of bounds.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_col_std.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *X = matrix_create(4, 1);
    matrix_set(X, 0, 0, 2);
    matrix_set(X, 1, 0, 4);
    matrix_set(X, 2, 0, 4);
    matrix_set(X, 3, 0, 4);

    // Population std (ddof=0): sqrt(((2-3.5)² + 3*(4-3.5)²) / 4)
    printf("Population std: %f\\n", matrix_col_std(X, 0, 0));  // ~0.866

    // Sample std (ddof=1): sqrt(((2-3.5)² + 3*(4-3.5)²) / 3)
    printf("Sample std: %f\\n", matrix_col_std(X, 0, 1));  // 1.0

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>ddof=0</span>: Population standard deviation (divide by n).
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>ddof=1</span>: Sample standard deviation (divide by n-1, Bessel's correction).
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Essential for Z-score standardization.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixColDotProduct({ color }: { color: string }) {
  const implementation = `double matrix_col_dot_product(const Matrix *A, const int col_A, const Matrix *B, const int col_B) {
    if (!A || !B) {
        NULL_MATRIX_ERROR();
        return 0;
    }
    if (A->rows != B->rows) {
        CUSTOM_ERROR("Row dimensions must match for dot product");
        return 0;
    }
    if (col_A < 0 || col_A >= A->cols || col_B < 0 || col_B >= B->cols) {
        INDEX_ERROR();
        return 0;
    }

    double sum = 0;
    const int n = A->rows;
    const int stride_A = A->cols;
    const int stride_B = B->cols;

    for (int i = 0; i < n; i++) {
        sum += A->data[i * stride_A + col_A] * B->data[i * stride_B + col_B];
    }

    return sum;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_col_dot_product
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>matrix_col_dot_product</span>(const Matrix *A, int col_A, const Matrix *B, int col_B);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes the <span style={{ color }}>dot product</span> between a column of matrix A and a column of matrix B.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Both matrices must have the same number of rows.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>dot product</span> (also called inner product or scalar product)
            of two vectors is the sum of the products of their corresponding elements.
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`For column vectors a and b of length n:

        n
a · b = Σ  aᵢ × bᵢ = a₁b₁ + a₂b₂ + ... + aₙbₙ
       i=1`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`    [ 1 ]       [ 4 ]
a = [ 2 ]   b = [ 5 ]
    [ 3 ]       [ 6 ]

a · b = 1×4 + 2×5 + 3×6 = 4 + 10 + 18 = 32`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Geometric interpretation:</span>
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a · b</span> = ||a|| × ||b|| × cos(θ)
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Where θ is the angle between the vectors and ||·|| denotes the magnitude.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Properties:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Commutative:</span> a · b = b · a</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Distributive:</span> a · (b + c) = a · b + a · c</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Scalar multiplication:</span> (ka) · b = k(a · b)</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>Self dot product:</span> a · a = ||a||² (squared magnitude)</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Applications in ML:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Cosine similarity: cos(θ) = (a · b) / (||a|| × ||b||)</li>
            <li><span style={{ color }}>{'>'}</span> Linear regression coefficients</li>
            <li><span style={{ color }}>{'>'}</span> Neural network weighted sums</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>A</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">First matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col_A</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index in A (0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>B</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Second matrix. Must have same rows as A.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col_B</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index in B (0-based).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the dot product of the two columns.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Either matrix is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Row dimensions don't match</li>
            <li><span style={{ color }}>{'>'}</span> Column index is out of bounds</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_col_dot_product.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"

int main() {
    Matrix *A = matrix_create(3, 2);
    matrix_set(A, 0, 0, 1); matrix_set(A, 0, 1, 4);
    matrix_set(A, 1, 0, 2); matrix_set(A, 1, 1, 5);
    matrix_set(A, 2, 0, 3); matrix_set(A, 2, 1, 6);

    Matrix *B = matrix_create(3, 1);
    matrix_set(B, 0, 0, 7);
    matrix_set(B, 1, 0, 8);
    matrix_set(B, 2, 0, 9);

    // Dot product of A[:,0] and B[:,0]
    double dot = matrix_col_dot_product(A, 0, B, 0);
    printf("A[:,0] · B[:,0] = %f\\n", dot);  // 1*7 + 2*8 + 3*9 = 50

    // Dot product of A[:,1] and B[:,0]
    dot = matrix_col_dot_product(A, 1, B, 0);
    printf("A[:,1] · B[:,0] = %f\\n", dot);  // 4*7 + 5*8 + 6*9 = 122

    matrix_free(A);
    matrix_free(B);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Computes in O(n) time where n is the number of rows.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Can compute dot product between columns of the same matrix (A, col1, A, col2).
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Building block for computing covariance matrices.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixApplyCol({ color }: { color: string }) {
  const implementation = `void matrix_apply_col(Matrix *X, const int col, double (*func)(double)) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (!func) {
        CUSTOM_ERROR("Function pointer is NULL");
        return;
    }
    if (col < 0 || col >= X->cols) {
        INDEX_ERROR();
        return;
    }

    const int stride = X->cols;
    for (int i = 0; i < X->rows; i++) {
        X->data[i * stride + col] = func(X->data[i * stride + col]);
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_apply_col
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>matrix_apply_col</span>(Matrix *X, int col, double (*func)(double));</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Applies a <span style={{ color }}>function</span> to every element in a specific column.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The function takes a double and returns a double. Modifies the column in-place.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Matrix to modify (in-place).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index (0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>func</td>
                <td className="border-r border-white px-4 py-3 text-white/70">double (*)(double)</td>
                <td className="px-4 py-3 text-white/70">Function pointer: takes double, returns double.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>. The column is modified in-place.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> No operation performed if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Function pointer is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Column index is out of bounds</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_apply_col.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"
#include <math.h>

// Custom transformation function
double square(double x) {
    return x * x;
}

int main() {
    Matrix *X = matrix_create(3, 2);
    matrix_set(X, 0, 0, 1); matrix_set(X, 0, 1, 4);
    matrix_set(X, 1, 0, 2); matrix_set(X, 1, 1, 5);
    matrix_set(X, 2, 0, 3); matrix_set(X, 2, 1, 6);

    printf("Before:\\n");
    matrix_print(X);

    // Apply square function to column 0
    matrix_apply_col(X, 0, square);
    printf("After squaring col 0:\\n");
    matrix_print(X);
    // [[1, 4], [4, 5], [9, 6]]

    // Apply log to column 1 (using math.h)
    matrix_apply_col(X, 1, log);
    printf("After log on col 1:\\n");
    matrix_print(X);

    matrix_free(X);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Works with any function matching the <span style={{ color }}>double (*)(double)</span> signature.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Compatible with math.h functions: <span style={{ color }}>sqrt</span>, <span style={{ color }}>log</span>, <span style={{ color }}>exp</span>, <span style={{ color }}>sin</span>, etc.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for feature transformations (log, sqrt, normalization).
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorToMatrix({ color }: { color: string }) {
  const implementation = `Matrix *vector_to_matrix(const Vector *x) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return NULL;
    }

    Matrix *X = matrix_create(x->dim, 1);
    if (!X) {
        ALLOCATION_ERROR();
        return NULL;
    }

    for (int i = 0; i < x->dim; i++) {
        X->data[i] = x->data[i];
    }

    return X;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_to_matrix
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Matrix *<span style={{ color }}>vector_to_matrix</span>(const Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Converts a <span style={{ color }}>Vector</span> to a <span style={{ color }}>column Matrix</span> (n × 1).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Creates a new matrix with dimensions (vector.dim × 1).
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>x</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Vector*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the vector to convert.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new column matrix (n × 1) containing the vector elements.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Vector x is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_to_matrix.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"
#include "vector.h"

int main() {
    // Create a vector [1, 2, 3]
    Vector *v = vector_create(3);
    vector_set(v, 0, 1);
    vector_set(v, 1, 2);
    vector_set(v, 2, 3);

    // Convert to column matrix
    Matrix *M = vector_to_matrix(v);

    printf("Vector:\\n");
    vector_print(v);  // [1, 2, 3]

    printf("Matrix (3x1):\\n");
    matrix_print(M);
    // [[1]
    //  [2]
    //  [3]]

    vector_free(v);
    matrix_free(M);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Creates a <span style={{ color }}>column vector</span> (n × 1 matrix).
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for matrix multiplication with vectors.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The original vector is not modified.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function MatrixToVector({ color }: { color: string }) {
  const implementation = `Vector *matrix_to_vector(const Matrix *X, const int col, const int row_start, const int row_end) {
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }
    if (col < 0 || col > X->cols) {
        INDEX_ERROR();
        return NULL;
    }
    if (row_start < 0 || row_end > X->rows || row_start > row_end) {
        INDEX_ERROR();
        return NULL;
    }

    Vector* x = vector_create(row_end - row_start);
    if (!x) {
        ALLOCATION_ERROR();
        return NULL;
    }

    for (int i = 0; i < row_end - row_start; i++) {
        x->data[i] = X->data[(row_start + i) * X->cols + col];
    }

    return x;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix_to_vector
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Vector *<span style={{ color }}>matrix_to_vector</span>(const Matrix *X, int col, int row_start, int row_end);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Extracts a <span style={{ color }}>column slice</span> from a matrix and converts it to a Vector.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Allows specifying a row range [row_start, row_end) to extract a subset.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat parameters.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PARAMETER</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Matrix*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the source matrix.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Column index to extract (0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>row_start</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Starting row index (inclusive, 0-based).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>row_end</td>
                <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                <td className="px-4 py-3 text-white/70">Ending row index (exclusive).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new vector of length (row_end - row_start).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Column index is out of bounds</li>
            <li><span style={{ color }}>{'>'}</span> Row indices are invalid (out of bounds or start {'>'} end)</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat matrix_to_vector.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{implementation}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "matrix.h"
#include "vector.h"

int main() {
    Matrix *X = matrix_create(4, 3);
    // Fill matrix with values 1-12
    for (int i = 0; i < 4; i++)
        for (int j = 0; j < 3; j++)
            matrix_set(X, i, j, i * 3 + j + 1);

    // X = [[1,  2,  3 ]
    //      [4,  5,  6 ]
    //      [7,  8,  9 ]
    //      [10, 11, 12]]

    // Extract entire column 1: [2, 5, 8, 11]
    Vector *col1 = matrix_to_vector(X, 1, 0, 4);
    printf("Column 1 (all rows):\\n");
    vector_print(col1);  // [2, 5, 8, 11]

    // Extract column 0, rows 1-3: [4, 7]
    Vector *slice = matrix_to_vector(X, 0, 1, 3);
    printf("Column 0, rows [1,3):\\n");
    vector_print(slice);  // [4, 7]

    matrix_free(X);
    vector_free(col1);
    vector_free(slice);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat notes.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <ul className="space-y-3 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> Row range uses <span style={{ color }}>half-open interval</span> [row_start, row_end).
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> To extract entire column: use row_start=0, row_end=X-{'>'}rows.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for extracting target variable (y) from dataset matrix.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Note:</span> This function is in <span style={{ color }}>matrix.h</span> (not vector.h)
              to avoid <span style={{ color }}>circular dependency</span> — matrix.h includes vector.h, so vector.h cannot include matrix.h.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export function Matrix() {
  const { color } = useTheme()
  const location = useLocation()
  const subPath = location.pathname.replace('/guide/matrix', '').replace('/', '')

  switch (subPath) {
    case 'structure':
      return <MatrixStructure color={color} />
    case 'matrix_create':
      return <MatrixCreate color={color} />
    case 'matrix_copy':
      return <MatrixCopy color={color} />
    case 'matrix_free':
      return <MatrixFree color={color} />
    case 'matrix_get':
      return <MatrixGet color={color} />
    case 'matrix_set':
      return <MatrixSet color={color} />
    case 'read_csv':
      return <ReadCsv color={color} />
    case 'matrix_print':
      return <MatrixPrint color={color} />
    case 'matrix_print_head':
      return <MatrixPrintHead color={color} />
    case 'matrix_print_tail':
      return <MatrixPrintTail color={color} />
    case 'matrix_shape':
      return <MatrixShape color={color} />
    case 'matrix_size':
      return <MatrixSize color={color} />
    case 'matrix_transpose':
      return <MatrixTranspose color={color} />
    case 'matrix_inverse':
      return <MatrixInverse color={color} />
    case 'matrix_slice':
      return <MatrixSlice color={color} />
    case 'matrix_slice_rows':
      return <MatrixSliceRows color={color} />
    case 'matrix_slice_cols':
      return <MatrixSliceCols color={color} />
    case 'matrix_concat':
      return <MatrixConcat color={color} />
    case 'matrix_arithmetic':
      return <MatrixArithmetic color={color} />
    case 'matrix_multiplication':
      return <MatrixMultiplication color={color} />
    case 'matrix_scalar_arithmetic':
      return <MatrixScalarArithmetic color={color} />
    case 'matrix_min':
      return <MatrixMin color={color} />
    case 'matrix_max':
      return <MatrixMax color={color} />
    case 'matrix_sum':
      return <MatrixSum color={color} />
    case 'matrix_mean':
      return <MatrixMean color={color} />
    case 'matrix_col_min':
      return <MatrixColMin color={color} />
    case 'matrix_col_max':
      return <MatrixColMax color={color} />
    case 'matrix_col_sum':
      return <MatrixColSum color={color} />
    case 'matrix_col_mean':
      return <MatrixColMean color={color} />
    case 'matrix_col_std':
      return <MatrixColStd color={color} />
    case 'matrix_col_dot_product':
      return <MatrixColDotProduct color={color} />
    case 'matrix_apply_col':
      return <MatrixApplyCol color={color} />
    case 'vector_to_matrix':
      return <VectorToMatrix color={color} />
    case 'matrix_to_vector':
      return <MatrixToVector color={color} />
    default:
      return <MatrixOverview color={color} />
  }
}
