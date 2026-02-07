import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

// Helper component for function links
function FuncLink({ name, color }: { name: string; color: string }) {
  const navigate = useNavigate()
  return (
    <span
      onClick={() => navigate(`/guide/vector/${name}`)}
      className="cursor-pointer underline transition-colors hover:opacity-70"
      style={{ color }}
    >
      {name}()
    </span>
  )
}

const vectorHeader = `#ifndef VECTOR_H
#define VECTOR_H

#include "../errors/errors.h"

typedef struct {
    int dim;
    double *data;
} Vector;

Vector *vector_create(int dim);
Vector *vector_copy(const Vector *x);
void vector_free(Vector *x);

double vector_get(const Vector *x, int i);
void vector_set(Vector *x, int i, double value);

void vector_print(const Vector *x);
void vector_print_head(const Vector *x, int num);
void vector_print_tail(const Vector *x, int num);

Vector *vector_arithmetic(const Vector *x, const Vector *y, char op);
void vector_scalar_arithmetic(Vector *x, double scalar, char op);

double vector_min(const Vector *x);
double vector_max(const Vector *x);
double vector_sum(const Vector *x);
double vector_mean(const Vector *x);
double vector_std(const Vector *x, int ddof);

double vector_dot_product(const Vector *x, const Vector *y);
void vector_apply(Vector *x, double (*func)(double));

#endif`

function VectorOverview({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat overview.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>Vector</span> module provides
            efficient operations for working with mathematical vectors in C Learn.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> A vector is stored as a dynamically allocated array of doubles
            with its dimension tracked separately.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{vectorHeader}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

function VectorStructure({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_structure
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In mathematics, a <span style={{ color }}>vector</span> is
            an ordered n-tuple of numbers that represents a point or direction in n-dimensional space.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> A vector of dimension n can be written as:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>v</span> = [v₁, v₂, v₃, ..., vₙ]
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> For example, a vector in 3D space can represent a point
            position: <span style={{ color }}>[3.0, 1.5, 2.0]</span> or direction of movement, velocity, force, etc.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Vectors support operations such as: addition,
            subtraction, scalar multiplication, dot product, and more.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> A vector is defined by three key properties:
          </p>
          <ul className="mt-4 space-y-3 pl-6 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Magnitude</span> — the length or size of the vector, always a non-negative scalar value
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Direction</span> — indicates which way the vector points (e.g., from A to B vs from B to A)
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Line of Action</span> — the line along which the vector lies in space
            </li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>magnitude</span> (or norm) of a vector is calculated using the Euclidean formula:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>||v||</span> = √(v₁² + v₂² + v₃² + ... + vₙ²)
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> For a 2D vector <span style={{ color }}>v = [3, 4]</span>:
          </p>
          <div className="mt-2 pl-6 font-mono text-default text-white/70">
            <span style={{ color }}>||v||</span> = √(3² + 4²) = √(9 + 16) = √25 = <span style={{ color }}>5</span>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Canonical Position</span> — a vector is in canonical (standard) position when its
            starting point (tail) is placed at the origin (0, 0). This is the standard representation used in most calculations.
          </p>

                  </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat why_vectors_in_ml.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In machine learning, vectors are a <span style={{ color }}>fundamental data structure</span>:
          </p>
          <ul className="mt-4 space-y-3 pl-6 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Feature vectors</span> — each data point
              (e.g., image, text, user) is represented as a vector of numerical values
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Weights</span> — weights in neural
              networks are vectors that get optimized during training
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Gradients</span> — gradients used
              in optimization are also vectors
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Embeddings</span> — words, images and other
              objects are mapped into vector space
            </li>
          </ul>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Efficient vector operations are crucial for ML algorithm
            performance, which is why C Learn implements optimized functions for working with vectors.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_struct.c</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In C Learn, a vector is defined as a simple C structure:
          </p>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
            <pre className="font-mono text-default text-white/80">
              <code>{`typedef struct {
    int dim;       // vector dimension (number of elements)
    double *data;  // pointer to array of double values
} Vector;`}</code>
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
                  <td className="border-r border-white px-4 py-3" style={{ color }}>dim</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Number of elements in the vector (dimension)</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>data</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">double*</td>
                  <td className="px-4 py-3 text-white/70">Pointer to dynamically allocated array storing the values</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The structure uses <span style={{ color }}>double</span> for
            the precision required in ML calculations. Memory for <span style={{ color }}>data</span> is
            dynamically allocated, allowing vectors of arbitrary size.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector.h</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Complete header file with all function declarations:
          </p>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
            <pre className="font-mono text-sm leading-relaxed text-white/80">
              <code>{vectorHeader}</code>
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
                    <FuncLink name="vector_create" color={color} />, <FuncLink name="vector_copy" color={color} />, <FuncLink name="vector_free" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Access</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="vector_get" color={color} />, <FuncLink name="vector_set" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Display</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="vector_print" color={color} />, <FuncLink name="vector_print_head" color={color} />, <FuncLink name="vector_print_tail" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Arithmetic</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="vector_arithmetic" color={color} />, <FuncLink name="vector_scalar_arithmetic" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Statistics</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="vector_min" color={color} />, <FuncLink name="vector_max" color={color} />, <FuncLink name="vector_sum" color={color} />, <FuncLink name="vector_mean" color={color} />, <FuncLink name="vector_std" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Advanced</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="vector_dot_product" color={color} />, <FuncLink name="vector_apply" color={color} />
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

function VectorCreate({ color }: { color: string }) {
  const implementation = `Vector *vector_create(const int dim) {
    if (dim < 1) {
        CUSTOM_ERROR("Invalid vector dimension");
        return NULL;
    }
    Vector *x = malloc(sizeof(Vector));
    if (!x) {
        ALLOCATION_ERROR();
        return NULL;
    }

    x->dim = dim;
    x->data = calloc(dim, sizeof(double));

    return x;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_create
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Vector *<span style={{ color }}>vector_create</span>(const int dim);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Creates a new vector with the specified dimension.
            All elements are initialized to <span style={{ color }}>0.0</span> using calloc.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The function allocates memory for both the Vector
            structure and its data array. Returns <span style={{ color }}>NULL</span> if the
            dimension is invalid or if memory allocation fails.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>dim</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">The dimension (number of elements) of the vector. Must be at least 1.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a pointer to the newly created <span style={{ color }}>Vector</span> structure.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> dim &lt; 1 (invalid dimension)</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_create.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    // Create a vector with 5 elements
    Vector *v = vector_create(5);

    if (v == NULL) {
        printf("Failed to create vector\\n");
        return 1;
    }

    // All elements are initialized to 0.0
    vector_print(v);  // Output: [0.000000, 0.000000, 0.000000, 0.000000, 0.000000]

    // Don't forget to free the memory when done
    vector_free(v);

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
              <span style={{ color }}>{'>'}</span> Always check if the returned pointer is <span style={{ color }}>NULL</span> before using the vector.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The caller is responsible for freeing the memory using <FuncLink name="vector_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Uses <span style={{ color }}>calloc</span> instead of malloc to ensure all elements are zero-initialized.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorCopy({ color }: { color: string }) {
  const implementation = `Vector *vector_copy(const Vector *x) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return NULL;
    }

    Vector* copy = vector_create(x->dim);
    if (!copy) {
        ALLOCATION_ERROR();
        return NULL;
    }
    memcpy(copy->data, x->data, sizeof(double) * x->dim);

    return copy;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_copy
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Vector *<span style={{ color }}>vector_copy</span>(const Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Creates a deep copy of an existing vector. The new vector
            has its own memory allocation and is completely independent of the original.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Uses <span style={{ color }}>memcpy</span> for efficient
            copying of the data array.
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
                <td className="px-4 py-3 text-white/70">Pointer to the source vector to copy.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a pointer to the newly created copy of the vector.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Source vector x is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_copy.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *original = vector_create(3);
    vector_set(original, 0, 1.0);
    vector_set(original, 1, 2.0);
    vector_set(original, 2, 3.0);

    // Create a copy
    Vector *copy = vector_copy(original);

    // Modify the copy - original is unaffected
    vector_set(copy, 0, 99.0);

    vector_print(original);  // [1.000000, 2.000000, 3.000000]
    vector_print(copy);      // [99.000000, 2.000000, 3.000000]

    vector_free(original);
    vector_free(copy);
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
              <span style={{ color }}>{'>'}</span> Both the original and the copy must be freed separately using <FuncLink name="vector_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Internally uses <FuncLink name="vector_create" color={color} /> to allocate the new vector.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorFree({ color }: { color: string }) {
  const implementation = `void vector_free(Vector *x) {
    if (x) {
        free(x->data);
        free(x);
    } else {
        NULL_VECTOR_ERROR();
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_free
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>vector_free</span>(Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Frees all memory associated with a vector. This includes
            both the data array and the Vector structure itself.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Always call this function when you're done using a vector
            to prevent memory leaks.
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
                <td className="border-r border-white px-4 py-3 text-white/70">Vector*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the vector to free.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_free.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(5);

    // ... use the vector ...

    // Free when done
    vector_free(v);
    v = NULL;  // Good practice to avoid dangling pointer

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
              <span style={{ color }}>{'>'}</span> Must be called for every vector created with <FuncLink name="vector_create" color={color} /> or <FuncLink name="vector_copy" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorGet({ color }: { color: string }) {
  const implementation = `double vector_get(const Vector *x, const int i) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return 0;
    }
    if (i < 0 || i >= x->dim) {
        INDEX_ERROR();
        return 0;
    }
    return x->data[i];
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_get
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>vector_get</span>(const Vector *x, const int i);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Retrieves the value at the specified index in the vector.
            Uses zero-based indexing.
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
                <td className="px-4 py-3 text-white/70">Pointer to the vector.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>i</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Index of the element (0 to dim-1).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns the value at index i.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>0</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Vector x is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Index is out of bounds (i &lt; 0 or i &gt;= dim)</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_get.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(3);
    vector_set(v, 0, 10.5);
    vector_set(v, 1, 20.3);
    vector_set(v, 2, 30.7);

    double first = vector_get(v, 0);   // 10.5
    double second = vector_get(v, 1);  // 20.3
    double third = vector_get(v, 2);   // 30.7

    printf("Values: %.1f, %.1f, %.1f\\n", first, second, third);

    vector_free(v);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

function VectorSet({ color }: { color: string }) {
  const implementation = `void vector_set(Vector *x, const int i, const double value) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return;
    }
    if (i < 0 || i >= x->dim) {
        INDEX_ERROR();
        return;
    }
    x->data[i] = value;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_set
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>vector_set</span>(Vector *x, const int i, const double value);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Sets the value at the specified index in the vector.
            Uses zero-based indexing.
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
                <td className="border-r border-white px-4 py-3 text-white/70">Vector*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the vector.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>i</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Index of the element (0 to dim-1).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>value</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const double</td>
                <td className="px-4 py-3 text-white/70">The value to set.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_set.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(3);

    vector_set(v, 0, 1.5);
    vector_set(v, 1, 2.5);
    vector_set(v, 2, 3.5);

    vector_print(v);  // [1.500000, 2.500000, 3.500000]

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> Use <FuncLink name="vector_get" color={color} /> to retrieve values.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Index bounds are checked before setting.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorPrint({ color }: { color: string }) {
  const implementation = `void vector_print(const Vector *x) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return;
    }

    const size_t buf_size = x->dim * 32 + 64;
    char *buf = malloc(buf_size);
    if (!buf) {
        ALLOCATION_ERROR();
        return;
    }

    char *p = buf;
    p += sprintf(p, "[");
    for (int i = 0; i < x->dim; i++) {
        if (i > 0) p += sprintf(p, ", ");
        p += sprintf(p, "%.6f", x->data[i]);
    }
    p += sprintf(p, "]\\n");

    fwrite(buf, 1, p - buf, stdout);
    free(buf);
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_print
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>vector_print</span>(const Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints all elements of the vector to stdout in a readable format.
            Values are displayed with 6 decimal places.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Uses a dynamically allocated buffer for efficient output.
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
                <td className="px-4 py-3 text-white/70">Pointer to the vector to print.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_print.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(4);
    vector_set(v, 0, 1.0);
    vector_set(v, 1, 2.5);
    vector_set(v, 2, 3.14159);
    vector_set(v, 3, 4.0);

    vector_print(v);
    // Output: [1.000000, 2.500000, 3.141590, 4.000000]

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> For large vectors, consider using <FuncLink name="vector_print_head" color={color} /> or <FuncLink name="vector_print_tail" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Output format: [val1, val2, ..., valN]
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorPrintHead({ color }: { color: string }) {
  const implementation = `void vector_print_head(const Vector *x, const int num) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return;
    }

    if (num < 1 || num > x->dim) {
        INDEX_ERROR();
        return;
    }

    printf("[");
    for (int i = 0; i < num; i++) {
        if (i > 0) printf(", ");
        printf("%.6f", x->data[i]);
    }
    if (num < x->dim) {
        printf(", ...]\\n");
    } else {
        printf("]\\n");
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_print_head
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>vector_print_head</span>(const Vector *x, const int num);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints the first N elements of the vector. Useful for
            previewing large vectors without printing all values.
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
                <td className="px-4 py-3 text-white/70">Pointer to the vector.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>num</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Number of elements to print (1 to dim).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_print_head.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(100);
    for (int i = 0; i < 100; i++) {
        vector_set(v, i, i * 1.0);
    }

    vector_print_head(v, 5);
    // Output: [0.000000, 1.000000, 2.000000, 3.000000, 4.000000, ...]

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> See also <FuncLink name="vector_print_tail" color={color} /> for printing the last N elements.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> If num equals dim, no "..." is shown.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorPrintTail({ color }: { color: string }) {
  const implementation = `void vector_print_tail(const Vector *x, const int num) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return;
    }

    if (num < 1 || num > x->dim) {
        INDEX_ERROR();
        return;
    }

    const int start = x->dim - num;

    printf(num == x->dim ? "[" : "[...");
    for (int i = start; i < x->dim; i++) {
        if (i > start) printf(", ");
        printf("%.6f", x->data[i]);
    }
    printf("]\\n");
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_print_tail
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>vector_print_tail</span>(const Vector *x, const int num);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Prints the last N elements of the vector. Useful for
            inspecting the end of large vectors.
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
                <td className="px-4 py-3 text-white/70">Pointer to the vector.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>num</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Number of elements to print (1 to dim).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_print_tail.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(100);
    for (int i = 0; i < 100; i++) {
        vector_set(v, i, i * 1.0);
    }

    vector_print_tail(v, 5);
    // Output: [...95.000000, 96.000000, 97.000000, 98.000000, 99.000000]

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> See also <FuncLink name="vector_print_head" color={color} /> for printing the first N elements.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> If num equals dim, no "..." prefix is shown.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorArithmetic({ color }: { color: string }) {
  const implementation = `Vector *vector_arithmetic(const Vector *x, const Vector *y, const char op) {
    if (!x || !y) {
        NULL_VECTOR_ERROR();
        return NULL;
    }

    if (x->dim != y->dim) {
        CUSTOM_ERROR("Vector dimensions must match");
        return NULL;
    }

    Vector *z = vector_create(x->dim);
    if (!z) {
        ALLOCATION_ERROR();
        return NULL;
    }

    switch (op) {
        case '+':
            for (int i = 0; i < x->dim; i++)
                z->data[i] = x->data[i] + y->data[i];
            break;

        case '-':
            for (int i = 0; i < x->dim; i++)
                z->data[i] = x->data[i] - y->data[i];
            break;

        case '*':
            for (int i = 0; i < x->dim; i++)
                z->data[i] = x->data[i] * y->data[i];
            break;

        case '/':
            for (int i = 0; i < x->dim; i++) {
                if (y->data[i] == 0) {
                    CUSTOM_WARNING("Division by zero at index %d, set to 0", i);
                    z->data[i] = 0;
                } else {
                    z->data[i] = x->data[i] / y->data[i];
                }
            }
            break;

        default:
            CUSTOM_ERROR("Invalid operator");
            vector_free(z);
            return NULL;
    }

    return z;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_arithmetic
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Vector *<span style={{ color }}>vector_arithmetic</span>(const Vector *x, const Vector *y, const char op);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Performs element-wise arithmetic operations between two vectors.
            Returns a new vector with the results.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Supported operators: <span style={{ color }}>+</span> (add),{' '}
            <span style={{ color }}>-</span> (subtract), <span style={{ color }}>*</span> (multiply),{' '}
            <span style={{ color }}>/</span> (divide)
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Addition (+)</span> — element-wise sum of two vectors:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a + b</span> = [a₁ + b₁, a₂ + b₂, ..., aₙ + bₙ]
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example: <span style={{ color }}>[1, 2, 3] + [4, 5, 6] = [5, 7, 9]</span>
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Triangle Rule</span> — to add two vectors geometrically,
            place the tail of the second vector at the head of the first. The resultant vector goes from the tail of the first to the head of the second.
          </p>
          <div className="mt-2 pl-6 font-mono text-default text-white/70">
            A → B → C : vector AC = vector AB + vector BC
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Parallelogram Rule</span> — place both vectors at the same origin point.
            Complete the parallelogram. The diagonal from the origin represents the sum of the two vectors.
          </p>
          <div className="mt-2 pl-6 font-mono text-default text-white/70">
            Vectors a and b from origin O → diagonal OC = a + b
          </div>

          <p className="mt-8 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Subtraction (-)</span> — element-wise difference of two vectors:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a - b</span> = [a₁ - b₁, a₂ - b₂, ..., aₙ - bₙ]
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example: <span style={{ color }}>[5, 7, 9] - [4, 5, 6] = [1, 2, 3]</span>
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Geometrically, <span style={{ color }}>a - b</span> is equivalent to <span style={{ color }}>a + (-b)</span>,
            where -b is vector b with reversed direction.
          </p>

          <p className="mt-8 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Multiplication (*)</span> — element-wise product (Hadamard product):
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a * b</span> = [a₁ × b₁, a₂ × b₂, ..., aₙ × bₙ]
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example: <span style={{ color }}>[2, 3, 4] * [5, 6, 7] = [10, 18, 28]</span>
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Note: This is NOT the dot product. It multiplies corresponding elements.
          </p>

          <p className="mt-8 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Division (/)</span> — element-wise division:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a / b</span> = [a₁ / b₁, a₂ / b₂, ..., aₙ / bₙ]
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example: <span style={{ color }}>[10, 18, 28] / [5, 6, 7] = [2, 3, 4]</span>
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Warning: Division by zero will return 0 for that element with a warning.
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
                <td className="px-4 py-3 text-white/70">First operand vector.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>y</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Vector*</td>
                <td className="px-4 py-3 text-white/70">Second operand vector (must have same dimension as x).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>op</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const char</td>
                <td className="px-4 py-3 text-white/70">Operator: '+', '-', '*', or '/'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new vector containing the result. Returns <span style={{ color }}>NULL</span> on error.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_arithmetic.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *a = vector_create(3);
    Vector *b = vector_create(3);

    vector_set(a, 0, 10); vector_set(a, 1, 20); vector_set(a, 2, 30);
    vector_set(b, 0, 1);  vector_set(b, 1, 2);  vector_set(b, 2, 3);

    Vector *sum = vector_arithmetic(a, b, '+');
    vector_print(sum);  // [11.000000, 22.000000, 33.000000]

    Vector *diff = vector_arithmetic(a, b, '-');
    vector_print(diff); // [9.000000, 18.000000, 27.000000]

    Vector *prod = vector_arithmetic(a, b, '*');
    vector_print(prod); // [10.000000, 40.000000, 90.000000]

    vector_free(a);
    vector_free(b);
    vector_free(sum);
    vector_free(diff);
    vector_free(prod);
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
              <span style={{ color }}>{'>'}</span> Division by zero sets the result to 0 with a warning.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The result vector must be freed using <FuncLink name="vector_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For scalar operations, use <FuncLink name="vector_scalar_arithmetic" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorScalarArithmetic({ color }: { color: string }) {
  const implementation = `void vector_scalar_arithmetic(Vector *x, const double scalar, const char op) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return;
    }

    switch (op) {
        case '+':
            for (int i = 0; i < x->dim; i++)
                x->data[i] += scalar;
            break;

        case '-':
            for (int i = 0; i < x->dim; i++)
                x->data[i] -= scalar;
            break;

        case '*':
            for (int i = 0; i < x->dim; i++)
                x->data[i] *= scalar;
            break;

        case '/':
            if (scalar == 0) {
                CUSTOM_ERROR("Division by zero is not allowed");
                return;
            }
            for (int i = 0; i < x->dim; i++)
                x->data[i] /= scalar;
            break;

        default:
            CUSTOM_ERROR("Invalid operator");
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_scalar_arithmetic
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>vector_scalar_arithmetic</span>(Vector *x, const double scalar, const char op);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Performs in-place arithmetic operations between a vector and a scalar value.
            Modifies the original vector.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Scalar multiplication multiplies each element of a vector by a scalar value:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>k × v</span> = [k × v₁, k × v₂, ..., k × vₙ]
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example: <span style={{ color }}>3 × [2, 4, 6] = [6, 12, 18]</span>
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> How scalar multiplication affects vector properties:
          </p>

          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>When k {'>'} 0</span> (positive scalar):
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Magnitude — multiplied by k (vector gets longer if k {'>'} 1, shorter if 0 {'<'} k {'<'} 1)</li>
            <li><span style={{ color }}>{'>'}</span> Direction — unchanged (same direction)</li>
            <li><span style={{ color }}>{'>'}</span> Line of Action — unchanged (same line)</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>When k {'<'} 0</span> (negative scalar):
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Magnitude — multiplied by |k| (absolute value)</li>
            <li><span style={{ color }}>{'>'}</span> Direction — reversed (points opposite way)</li>
            <li><span style={{ color }}>{'>'}</span> Line of Action — unchanged (same line)</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>When k = 1</span> (identity):
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Magnitude — unchanged</li>
            <li><span style={{ color }}>{'>'}</span> Direction — unchanged</li>
            <li><span style={{ color }}>{'>'}</span> Line of Action — unchanged</li>
          </ul>
          <p className="mt-2 pl-6 font-mono text-default text-white/70">
            The vector remains exactly the same: <span style={{ color }}>1 × v = v</span>
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>When k = 0</span> (zero scalar):
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Result is the <span style={{ color }}>zero vector</span>: [0, 0, ..., 0]</li>
            <li><span style={{ color }}>{'>'}</span> Magnitude becomes 0</li>
            <li><span style={{ color }}>{'>'}</span> Direction and Line of Action are undefined</li>
          </ul>
          <p className="mt-2 pl-6 font-mono text-default text-white/70">
            Example: <span style={{ color }}>0 × [5, 10, 15] = [0, 0, 0]</span>
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>When k = -1</span>:
          </p>
          <p className="mt-2 pl-6 font-mono text-default text-white/70">
            The vector is reversed: <span style={{ color }}>-1 × v = -v</span> (same magnitude, opposite direction)
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
                <td className="border-r border-white px-4 py-3 text-white/70">Vector*</td>
                <td className="px-4 py-3 text-white/70">Vector to modify (in-place).</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>scalar</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const double</td>
                <td className="px-4 py-3 text-white/70">The scalar value.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>op</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const char</td>
                <td className="px-4 py-3 text-white/70">Operator: '+', '-', '*', or '/'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_scalar_arithmetic.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(3);
    vector_set(v, 0, 2); vector_set(v, 1, 4); vector_set(v, 2, 6);

    vector_scalar_arithmetic(v, 10, '+');
    vector_print(v);  // [12.000000, 14.000000, 16.000000]

    vector_scalar_arithmetic(v, 2, '*');
    vector_print(v);  // [24.000000, 28.000000, 32.000000]

    vector_scalar_arithmetic(v, 4, '/');
    vector_print(v);  // [6.000000, 7.000000, 8.000000]

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> Modifies the vector <span style={{ color }}>in-place</span> (no new allocation).
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Division by zero is not allowed and will trigger an error.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For vector-to-vector operations, use <FuncLink name="vector_arithmetic" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorMin({ color }: { color: string }) {
  const implementation = `double vector_min(const Vector *x) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return 0;
    }

    double min = x->data[0];
    for (int i = 1; i < x->dim; i++)
        if (x->data[i] < min) min = x->data[i];

    return min;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_min
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>vector_min</span>(const Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Finds and returns the minimum value in the vector.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_min.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(5);
    vector_set(v, 0, 3.5);
    vector_set(v, 1, 1.2);
    vector_set(v, 2, 4.8);
    vector_set(v, 3, 0.5);
    vector_set(v, 4, 2.1);

    double min = vector_min(v);
    printf("Min: %.1f\\n", min);  // Min: 0.5

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> See also <FuncLink name="vector_max" color={color} /> for finding the maximum.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorMax({ color }: { color: string }) {
  const implementation = `double vector_max(const Vector *x) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return 0;
    }

    double max = x->data[0];
    for (int i = 1; i < x->dim; i++)
        if (x->data[i] > max) max = x->data[i];

    return max;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_max
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>vector_max</span>(const Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Finds and returns the maximum value in the vector.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_max.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(5);
    vector_set(v, 0, 3.5);
    vector_set(v, 1, 1.2);
    vector_set(v, 2, 4.8);
    vector_set(v, 3, 0.5);
    vector_set(v, 4, 2.1);

    double max = vector_max(v);
    printf("Max: %.1f\\n", max);  // Max: 4.8

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> See also <FuncLink name="vector_min" color={color} /> for finding the minimum.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorSum({ color }: { color: string }) {
  const implementation = `double vector_sum(const Vector *x) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return 0;
    }

    double sum = 0;
    for (int i = 0; i < x->dim; i++)
        sum += x->data[i];

    return sum;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_sum
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>vector_sum</span>(const Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Calculates and returns the sum of all elements in the vector.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_sum.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(4);
    vector_set(v, 0, 1.0);
    vector_set(v, 1, 2.0);
    vector_set(v, 2, 3.0);
    vector_set(v, 3, 4.0);

    double sum = vector_sum(v);
    printf("Sum: %.1f\\n", sum);  // Sum: 10.0

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> Used internally by <FuncLink name="vector_mean" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorMean({ color }: { color: string }) {
  const implementation = `double vector_mean(const Vector *x) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return 0;
    }

    return vector_sum(x) / x->dim;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_mean
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>vector_mean</span>(const Vector *x);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Calculates and returns the arithmetic mean (average) of all elements.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Formula: mean = sum(x) / n
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_mean.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(4);
    vector_set(v, 0, 1.0);
    vector_set(v, 1, 2.0);
    vector_set(v, 2, 3.0);
    vector_set(v, 3, 4.0);

    double mean = vector_mean(v);
    printf("Mean: %.1f\\n", mean);  // Mean: 2.5

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> Internally uses <FuncLink name="vector_sum" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Used by <FuncLink name="vector_std" color={color} /> for standard deviation calculation.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorStd({ color }: { color: string }) {
  const implementation = `double vector_std(const Vector *x, const int ddof) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return 0;
    }
    if (ddof != 0 && ddof != 1) {
        CUSTOM_ERROR("Property 'ddof' must be 0 or 1");
        return 0;
    }

    const int n = x->dim;
    const double mean = vector_mean(x);

    double var = 0;
    for (int i = 0; i < n; i++) {
        const double diff = x->data[i] - mean;
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
        vector_std
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>vector_std</span>(const Vector *x, const int ddof);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Calculates the standard deviation of the vector elements.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>ddof</span> (Delta Degrees of Freedom)
            parameter controls the divisor:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> ddof = 0: Population std (divide by N)</li>
            <li><span style={{ color }}>{'>'}</span> ddof = 1: Sample std (divide by N-1)</li>
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>x</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Vector*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the vector.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>ddof</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Delta degrees of freedom (0 or 1).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_std.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *v = vector_create(5);
    vector_set(v, 0, 2.0);
    vector_set(v, 1, 4.0);
    vector_set(v, 2, 4.0);
    vector_set(v, 3, 4.0);
    vector_set(v, 4, 6.0);

    double pop_std = vector_std(v, 0);  // Population std
    double sam_std = vector_std(v, 1);  // Sample std

    printf("Population std: %.4f\\n", pop_std);  // 1.2649
    printf("Sample std: %.4f\\n", sam_std);      // 1.4142

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> Uses <FuncLink name="vector_mean" color={color} /> internally.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> For ML, sample std (ddof=1) is typically used.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function VectorDotProduct({ color }: { color: string }) {
  const implementation = `double vector_dot_product(const Vector *x, const Vector *y) {
    if (!x || !y) {
        NULL_VECTOR_ERROR();
        return 0;
    }

    if (x->dim != y->dim) {
        CUSTOM_ERROR("Vector dimensions must match for dot product");
        return 0;
    }

    double sum = 0;
    for (int i = 0; i < x->dim; i++)
        sum += x->data[i] * y->data[i];

    return sum;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_dot_product
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>double <span style={{ color }}>vector_dot_product</span>(const Vector *x, const Vector *y);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Calculates the dot product (inner product) of two vectors.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The dot product is fundamental in ML for computing similarities,
            projections, and neural network forward passes.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>dot product</span> (also called inner product or scalar product)
            multiplies corresponding elements and sums the results:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a · b</span> = a₁b₁ + a₂b₂ + ... + aₙbₙ = Σ(aᵢ × bᵢ)
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example: <span style={{ color }}>[1, 2, 3] · [4, 5, 6]</span> = 1×4 + 2×5 + 3×6 = 4 + 10 + 18 = <span style={{ color }}>32</span>
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Geometric interpretation</span> — the dot product relates to the angle θ between vectors:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a · b</span> = ||a|| × ||b|| × cos(θ)
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Where ||a|| and ||b|| are the magnitudes of vectors a and b, and θ is the angle between them.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Orthogonality</span> — two vectors are orthogonal (perpendicular) when their dot product equals zero:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <span style={{ color }}>a ⊥ b</span> ⟺ a · b = 0
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> This occurs because cos(90°) = 0, so ||a|| × ||b|| × cos(90°) = 0
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Example: <span style={{ color }}>[1, 0] · [0, 1]</span> = 1×0 + 0×1 = <span style={{ color }}>0</span> (perpendicular vectors)
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Interpreting the dot product result:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>a · b {'>'} 0</span> — angle between vectors is acute (θ {'<'} 90°), vectors point in similar directions</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>a · b = 0</span> — vectors are orthogonal (θ = 90°), completely independent</li>
            <li><span style={{ color }}>{'>'}</span> <span style={{ color }}>a · b {'<'} 0</span> — angle between vectors is obtuse (θ {'>'} 90°), vectors point in opposite directions</li>
          </ul>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Properties:</span>
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Commutative: a · b = b · a</li>
            <li><span style={{ color }}>{'>'}</span> Distributive: a · (b + c) = a · b + a · c</li>
            <li><span style={{ color }}>{'>'}</span> Scalar multiplication: (ka) · b = k(a · b)</li>
            <li><span style={{ color }}>{'>'}</span> Self dot product: a · a = ||a||² (magnitude squared)</li>
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>x</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Vector*</td>
                <td className="px-4 py-3 text-white/70">First vector.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>y</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const Vector*</td>
                <td className="px-4 py-3 text-white/70">Second vector (same dimension as x).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_dot_product.c</h2>
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
            <code>{`#include "vector.h"

int main() {
    Vector *a = vector_create(3);
    Vector *b = vector_create(3);

    vector_set(a, 0, 1); vector_set(a, 1, 2); vector_set(a, 2, 3);
    vector_set(b, 0, 4); vector_set(b, 1, 5); vector_set(b, 2, 6);

    double dot = vector_dot_product(a, b);
    // 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
    printf("Dot product: %.1f\\n", dot);  // Dot product: 32.0

    vector_free(a);
    vector_free(b);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

function VectorApply({ color }: { color: string }) {
  const implementation = `void vector_apply(Vector *x, double (*func)(double)) {
    if (!x) {
        NULL_VECTOR_ERROR();
        return;
    }
    if (!func) {
        CUSTOM_ERROR("Function pointer is NULL");
        return;
    }

    for (int i = 0; i < x->dim; i++) {
        x->data[i] = func(x->data[i]);
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        vector_apply
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>vector_apply</span>(Vector *x, double (*func)(double));</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Applies a function to each element of the vector in-place.
            Useful for applying activation functions, transformations, etc.
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
                <td className="border-r border-white px-4 py-3 text-white/70">Vector*</td>
                <td className="px-4 py-3 text-white/70">Vector to modify in-place.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>func</td>
                <td className="border-r border-white px-4 py-3 text-white/70">double (*)(double)</td>
                <td className="px-4 py-3 text-white/70">Function pointer that takes and returns a double.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat vector_apply.c</h2>
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
            <code>{`#include "vector.h"
#include <math.h>

// Custom activation function
double relu(double x) {
    return x > 0 ? x : 0;
}

double sigmoid(double x) {
    return 1.0 / (1.0 + exp(-x));
}

int main() {
    Vector *v = vector_create(4);
    vector_set(v, 0, -2.0);
    vector_set(v, 1, -1.0);
    vector_set(v, 2, 1.0);
    vector_set(v, 3, 2.0);

    // Apply ReLU
    vector_apply(v, relu);
    vector_print(v);  // [0.000000, 0.000000, 1.000000, 2.000000]

    // Apply sqrt from math.h
    vector_apply(v, sqrt);
    vector_print(v);  // [0.000000, 0.000000, 1.000000, 1.414214]

    vector_free(v);
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
              <span style={{ color }}>{'>'}</span> Modifies the vector <span style={{ color }}>in-place</span>.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Works with any function matching the signature: double func(double)
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Common uses: activation functions (ReLU, sigmoid), math transforms (sqrt, exp, log)
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export function Vector() {
  const { color } = useTheme()
  const location = useLocation()
  const subPath = location.pathname.replace('/guide/vector', '').replace('/', '')

  switch (subPath) {
    case 'structure':
      return <VectorStructure color={color} />
    case 'vector_create':
      return <VectorCreate color={color} />
    case 'vector_copy':
      return <VectorCopy color={color} />
    case 'vector_free':
      return <VectorFree color={color} />
    case 'vector_get':
      return <VectorGet color={color} />
    case 'vector_set':
      return <VectorSet color={color} />
    case 'vector_print':
      return <VectorPrint color={color} />
    case 'vector_print_head':
      return <VectorPrintHead color={color} />
    case 'vector_print_tail':
      return <VectorPrintTail color={color} />
    case 'vector_arithmetic':
      return <VectorArithmetic color={color} />
    case 'vector_scalar_arithmetic':
      return <VectorScalarArithmetic color={color} />
    case 'vector_min':
      return <VectorMin color={color} />
    case 'vector_max':
      return <VectorMax color={color} />
    case 'vector_sum':
      return <VectorSum color={color} />
    case 'vector_mean':
      return <VectorMean color={color} />
    case 'vector_std':
      return <VectorStd color={color} />
    case 'vector_dot_product':
      return <VectorDotProduct color={color} />
    case 'vector_apply':
      return <VectorApply color={color} />
    default:
      return <VectorOverview color={color} />
  }
}
