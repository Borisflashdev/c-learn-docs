import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

// Helper component for function links
function FuncLink({ name, color }: { name: string; color: string }) {
  const navigate = useNavigate()
  return (
    <span
      onClick={() => navigate(`/guide/scaling/${name}`)}
      className="cursor-pointer underline transition-colors hover:opacity-70"
      style={{ color }}
    >
      {name}()
    </span>
  )
}

const headerFile = `#ifndef SCALER_H
#define SCALER_H

#include "../matrix/matrix.h"

typedef enum {
    MIN_MAX_NORMALIZATION,
    MEAN_NORMALIZATION,
    STANDARDIZATION
} ScalerType;

typedef struct {
    ScalerType type;
    int col_start;
    int col_end;
    double *params1;
    double *params2;
    int num_cols;
    int fitted;
} Scaler;

Scaler *scaler_create(ScalerType type, int col_start, int col_end);
void scaler_free(Scaler *scaler);

void scaler_fit(Scaler *scaler, Matrix *X);
void scaler_transform(Scaler *scaler, Matrix *X);
void scaler_fit_transform(Scaler *scaler, Matrix *X);
void scaler_inverse_transform(Scaler *scaler, Matrix *X);

#endif`

function ScalingOverview({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaling
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat overview.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>Scaler</span> module provides
            feature scaling operations essential for machine learning preprocessing.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Feature scaling ensures that all features contribute equally
            to the model by normalizing their ranges or distributions.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Supports three scaling methods: <span style={{ color }}>Min-Max Normalization</span>,{' '}
            <span style={{ color }}>Mean Normalization</span>, and <span style={{ color }}>Standardization</span> (Z-score).
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{headerFile}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

function ScalingStructure({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaler_structure
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Feature scaling</span> is a method used
            to normalize the range of independent variables (features). It transforms data so that different
            features are on a comparable scale.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>MIN_MAX_NORMALIZATION</span>
          </p>
          <div className="mt-2 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`x' = (x - min) / (max - min)

Maps values to range [0, 1]`}</pre>
          </div>
          <p className="mt-2 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Best when: bounded range needed, no outliers present.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>MEAN_NORMALIZATION</span>
          </p>
          <div className="mt-2 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`x' = (x - mean) / (max - min)

Maps values to range [-1, 1] (approximately), centered at 0`}</pre>
          </div>
          <p className="mt-2 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Best when: centered data needed, bounded range preferred.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>STANDARDIZATION</span> (Z-score)
          </p>
          <div className="mt-2 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`x' = (x - μ) / σ

Maps values to mean=0, std=1 (standard normal distribution)`}</pre>
          </div>
          <p className="mt-2 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Best when: outliers present, algorithms assume normal distribution.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat why_scaling_in_ml.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In machine learning, feature scaling is <span style={{ color }}>essential for many algorithms</span>:
          </p>
          <ul className="mt-4 space-y-3 pl-6 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Gradient descent convergence</span> — features with large ranges
              dominate the gradient, causing slow or unstable convergence.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Distance-based algorithms</span> — KNN, K-means, and SVM
              are sensitive to feature magnitudes.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Regularization fairness</span> — L1/L2 penalties affect
              all features equally only when they're on the same scale.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Neural networks</span> — activation functions work best
              with inputs in specific ranges.
            </li>
          </ul>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Important:</span> Always fit on training data only,
            then use those parameters to transform both training and test data. This prevents data leakage.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler_struct.c</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In C Learn, a scaler is defined using an enum for the type and a struct for the state:
          </p>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
            <pre className="font-mono text-default text-white/80">
              <code>{`typedef enum {
    MIN_MAX_NORMALIZATION,
    MEAN_NORMALIZATION,
    STANDARDIZATION
} ScalerType;

typedef struct {
    ScalerType type;
    int col_start;
    int col_end;
    double *params1;
    double *params2;
    int num_cols;
    int fitted;
} Scaler;`}</code>
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
                  <td className="border-r border-white px-4 py-3" style={{ color }}>type</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">ScalerType</td>
                  <td className="px-4 py-3 text-white/70">Scaling method (MIN_MAX, MEAN, or STANDARDIZATION)</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>col_start</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">First column index to scale (inclusive)</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>col_end</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Last column index to scale (inclusive)</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>params1</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">double*</td>
                  <td className="px-4 py-3 text-white/70">First parameter array (min or mean per column)</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>params2</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">double*</td>
                  <td className="px-4 py-3 text-white/70">Second parameter array (max-min or std per column)</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>num_cols</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Number of columns being scaled (col_end - col_start + 1)</td>
                </tr>
                <tr>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>fitted</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Whether the scaler has been fitted (0 or 1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler.h</h2>
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
                    <FuncLink name="scaler_create" color={color} />, <FuncLink name="scaler_free" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Fitting</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="scaler_fit" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Transform</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="scaler_transform" color={color} />, <FuncLink name="scaler_fit_transform" color={color} />, <FuncLink name="scaler_inverse_transform" color={color} />
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

function ScalerCreate({ color }: { color: string }) {
  const implementation = `Scaler *scaler_create(const ScalerType type, const int col_start, const int col_end) {
    if (type != MIN_MAX_NORMALIZATION && type != MEAN_NORMALIZATION && type != STANDARDIZATION) {
        CUSTOM_ERROR("Invalid scaler type");
        return NULL;
    }
    if (col_start < 0 || col_end < 0 || col_end <= col_start) {
        INDEX_ERROR();
        return NULL;
    }

    Scaler *scaler = malloc(sizeof(Scaler));
    if (!scaler) {
        ALLOCATION_ERROR();
        return NULL;
    }

    scaler->type = type;
    scaler->col_start = col_start;
    scaler->col_end = col_end;
    scaler->params1 = NULL;
    scaler->params2 = NULL;
    scaler->num_cols = col_end - col_start;
    scaler->fitted = 0;

    return scaler;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaler_create
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Scaler *<span style={{ color }}>scaler_create</span>(const ScalerType type, const int col_start, const int col_end);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Creates a new scaler with the specified scaling method and column range.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The scaler is initialized in an <span style={{ color }}>unfitted</span> state.
            The parameter arrays (<span style={{ color }}>params1</span>, <span style={{ color }}>params2</span>) are set
            to NULL and will be allocated during <FuncLink name="scaler_fit" color={color} />.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The column range <span style={{ color }}>[col_start, col_end)</span> defines
            which columns of the matrix will be scaled. The range is exclusive on the right side.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>type</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const ScalerType</td>
                <td className="px-4 py-3 text-white/70">Scaling method: MIN_MAX_NORMALIZATION, MEAN_NORMALIZATION, or STANDARDIZATION.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>col_start</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">First column index to scale (inclusive). Must be &gt;= 0.</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>col_end</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Last column index (exclusive). Must be &gt; col_start.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a pointer to the newly created <span style={{ color }}>Scaler</span> structure.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Invalid scaler type</li>
            <li><span style={{ color }}>{'>'}</span> col_start &lt; 0 or col_end &lt; 0 or col_end &lt;= col_start</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler_create.c</h2>
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
            <code>{`#include "scaler.h"

int main() {
    // Create a min-max scaler for columns 0 to 3
    Scaler *scaler = scaler_create(MIN_MAX_NORMALIZATION, 0, 3);

    if (scaler == NULL) {
        printf("Failed to create scaler\\n");
        return 1;
    }

    // Scaler is ready to be fitted on data
    // scaler->fitted == 0 (not yet fitted)

    scaler_free(scaler);
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
              <span style={{ color }}>{'>'}</span> Always check if the returned pointer is <span style={{ color }}>NULL</span> before using the scaler.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The caller is responsible for freeing the memory using <FuncLink name="scaler_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The column range is <span style={{ color }}>[col_start, col_end)</span> — col_end is exclusive.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>num_cols</span> is computed as col_end - col_start.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function ScalerFree({ color }: { color: string }) {
  const implementation = `void scaler_free(Scaler *scaler) {
    if (scaler) {
        free(scaler->params1);
        free(scaler->params2);
        free(scaler);
    } else {
        NULL_SCALER_ERROR();
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaler_free
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>scaler_free</span>(Scaler *scaler);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Frees all memory associated with a scaler. This includes
            the parameter arrays (<span style={{ color }}>params1</span>, <span style={{ color }}>params2</span>) and
            the Scaler structure itself.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Always call this function when you're done using a scaler
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
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>scaler</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Scaler*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the scaler to free.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If scaler is NULL, prints an error message via <span style={{ color }}>NULL_SCALER_ERROR()</span>.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler_free.c</h2>
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
            <code>{`#include "scaler.h"

int main() {
    Scaler *scaler = scaler_create(STANDARDIZATION, 0, 5);

    // ... use the scaler ...

    // Free when done
    scaler_free(scaler);
    scaler = NULL;  // Good practice to avoid dangling pointer

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
              <span style={{ color }}>{'>'}</span> Safely handles unfitted scalers — <span style={{ color }}>free(NULL)</span> is a no-op in C.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Must be called for every scaler created with <FuncLink name="scaler_create" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function ScalerFit({ color }: { color: string }) {
  const implementation = `void scaler_fit(Scaler *scaler, Matrix *X) {
    if (!scaler) {
        NULL_SCALER_ERROR();
        return;
    }
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (scaler->col_start > X->cols || scaler->col_end > X->cols) {
        INDEX_ERROR();
        return;
    }

    scaler->params1 = malloc(sizeof(double) * scaler->num_cols);
    if (!scaler->params1) {
        ALLOCATION_ERROR();
        return;
    }
    scaler->params2 = malloc(sizeof(double) * scaler->num_cols);
    if (!scaler->params2) {
        ALLOCATION_ERROR();
        free(scaler->params1);
        return;
    }

    int n = 0;
    for (int j = scaler->col_start; j < scaler->col_end; j++) {
        switch (scaler->type) {
            case MIN_MAX_NORMALIZATION: {
                scaler->params1[n] = matrix_col_max(X, j);
                scaler->params2[n] = matrix_col_min(X, j);
                break;
            }
            case MEAN_NORMALIZATION: {
                scaler->params1[n] = matrix_col_mean(X, j);
                scaler->params2[n] = matrix_col_max(X, j) - matrix_col_min(X, j);
                break;
            }
            case STANDARDIZATION: {
                scaler->params1[n] = matrix_col_mean(X, j);
                scaler->params2[n] = matrix_col_std(X, j, 0);
                break;
            }
            default: {
                CUSTOM_ERROR("Invalid scaler type");
                free(scaler->params1);
                free(scaler->params2);
                return;
            }
        }
        n++;
    }
    scaler->fitted = 1;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaler_fit
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>scaler_fit</span>(Scaler *scaler, Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Computes and stores the scaling parameters from the training data.
            This step <span style={{ color }}>learns</span> the statistics needed for scaling without modifying the data.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The parameters computed depend on the scaler type:
          </p>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
            <table className="w-full font-mono text-default">
              <thead>
                <tr className="border-b border-white">
                  <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                  <th className="border-r border-white px-4 py-3 text-left text-white/90">params1</th>
                  <th className="px-4 py-3 text-left text-white/90">params2</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>MIN_MAX</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">col_max</td>
                  <td className="px-4 py-3 text-white/70">col_min</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>MEAN</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">col_mean</td>
                  <td className="px-4 py-3 text-white/70">col_max - col_min</td>
                </tr>
                <tr>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>STANDARDIZATION</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">col_mean</td>
                  <td className="px-4 py-3 text-white/70">col_std</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> After fitting, <span style={{ color }}>scaler-&gt;fitted</span> is set to 1.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>scaler</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Scaler*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the scaler to fit.</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Training data matrix to compute parameters from.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns early with an error if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Scaler is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Column range exceeds matrix dimensions</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler_fit.c</h2>
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
            <code>{`#include "scaler.h"

int main() {
    Matrix *X_train = read_csv("train.csv", ',');

    // Create and fit a standardization scaler on columns 0-3
    Scaler *scaler = scaler_create(STANDARDIZATION, 0, 3);
    scaler_fit(scaler, X_train);

    // Now scaler->fitted == 1
    // params1 contains column means
    // params2 contains column standard deviations

    // Use the fitted scaler to transform data
    scaler_transform(scaler, X_train);

    scaler_free(scaler);
    matrix_free(X_train);
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
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Important:</span> Always fit on training data only to prevent data leakage.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The column range must not exceed the matrix dimensions.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Allocates memory for params1 and params2 — these are freed by <FuncLink name="scaler_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> If allocation fails for params2, params1 is cleaned up to avoid memory leaks.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function ScalerTransform({ color }: { color: string }) {
  const implementation = `void scaler_transform(Scaler *scaler, Matrix *X) {
    if (!scaler) {
        NULL_SCALER_ERROR();
        return;
    }
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (scaler->col_start > X->cols || scaler->col_end > X->cols) {
        INDEX_ERROR();
        return;
    }
    if (scaler->fitted == 0) {
        CUSTOM_ERROR("Scaler must be fitted before use");
        return;
    }

    int n = 0;
    for (int j = scaler->col_start; j < scaler->col_end; j++) {
        for (int i = 0; i < X->rows; i++) {
            double scaled_val = 0;
            const double x = matrix_get(X, i, j);
            switch (scaler->type) {
                case MIN_MAX_NORMALIZATION: {
                    const double max = scaler->params1[n];
                    const double min = scaler->params2[n];
                    scaled_val = (x - min) / (max - min);
                    break;
                }
                case MEAN_NORMALIZATION: {
                    const double mean = scaler->params1[n];
                    const double diff = scaler->params2[n];
                    scaled_val = (x - mean) / diff;
                    break;
                }
                case STANDARDIZATION: {
                    const double mean = scaler->params1[n];
                    const double std = scaler->params2[n];
                    scaled_val = (x - mean) / std;
                    break;
                }
                default: {
                    CUSTOM_ERROR("Invalid scaler type");
                    return;
                }
            }
            matrix_set(X, i, j, scaled_val);
        }
        n++;
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaler_transform
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>scaler_transform</span>(Scaler *scaler, Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Applies the scaling transformation to the matrix <span style={{ color }}>in-place</span> using
            the parameters learned during <FuncLink name="scaler_fit" color={color} />.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The transformation formula depends on the scaler type:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`MIN_MAX:         x' = (x - min) / (max - min)
MEAN:            x' = (x - mean) / (max - min)
STANDARDIZATION: x' = (x - mean) / std`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The scaler <span style={{ color }}>must be fitted</span> before calling this function.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>scaler</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Scaler*</td>
                <td className="px-4 py-3 text-white/70">Pointer to a fitted scaler.</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Matrix to transform in-place.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>. Modifies the matrix in-place.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns early with an error if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Scaler is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Column range exceeds matrix dimensions</li>
            <li><span style={{ color }}>{'>'}</span> Scaler is not fitted (fitted == 0)</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler_transform.c</h2>
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
            <code>{`#include "scaler.h"

int main() {
    Matrix *X_train = read_csv("train.csv", ',');
    Matrix *X_test = read_csv("test.csv", ',');

    Scaler *scaler = scaler_create(MIN_MAX_NORMALIZATION, 0, 4);

    // Fit on training data only
    scaler_fit(scaler, X_train);

    // Transform both sets using the same parameters
    scaler_transform(scaler, X_train);
    scaler_transform(scaler, X_test);

    // X_train and X_test are now scaled in-place

    scaler_free(scaler);
    matrix_free(X_train);
    matrix_free(X_test);
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
              <span style={{ color }}>{'>'}</span> The scaler must be fitted first — calling transform on an unfitted scaler triggers an error.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Modifies the matrix <span style={{ color }}>in-place</span> — the original values are overwritten.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Use the same fitted scaler to transform both training and test data.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> To reverse the transformation, use <FuncLink name="scaler_inverse_transform" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function ScalerFitTransform({ color }: { color: string }) {
  const implementation = `void scaler_fit_transform(Scaler *scaler, Matrix *X) {
    scaler_fit(scaler, X);
    if (scaler->params1 && scaler->params2) {
        scaler_transform(scaler, X);
    } else {
        ALLOCATION_ERROR();
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaler_fit_transform
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>scaler_fit_transform</span>(Scaler *scaler, Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Convenience function that combines <FuncLink name="scaler_fit" color={color} /> and{' '}
            <FuncLink name="scaler_transform" color={color} /> in a single call.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> First computes the scaling parameters from the data, then immediately
            applies the transformation <span style={{ color }}>in-place</span>.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Verifies that parameter allocation succeeded before proceeding with the transform.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>scaler</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Scaler*</td>
                <td className="px-4 py-3 text-white/70">Pointer to an unfitted scaler.</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Training data matrix to fit on and transform in-place.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>. Fits and transforms the matrix in-place.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If the fit step fails (allocation error), the transform is skipped and an error is printed.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler_fit_transform.c</h2>
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
            <code>{`#include "scaler.h"

int main() {
    Matrix *X_train = read_csv("train.csv", ',');
    Matrix *X_test = read_csv("test.csv", ',');

    Scaler *scaler = scaler_create(STANDARDIZATION, 0, 4);

    // Fit and transform training data in one step
    scaler_fit_transform(scaler, X_train);

    // Transform test data using the same parameters
    scaler_transform(scaler, X_test);

    scaler_free(scaler);
    matrix_free(X_train);
    matrix_free(X_test);
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
              <span style={{ color }}>{'>'}</span> Only use this on <span style={{ color }}>training data</span>. For test data, use <FuncLink name="scaler_transform" color={color} /> with the already-fitted scaler.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Equivalent to calling scaler_fit() then scaler_transform() separately.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> If the fit step fails (allocation error), the transform is skipped.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function ScalerInverseTransform({ color }: { color: string }) {
  const implementation = `void scaler_inverse_transform(Scaler *scaler, Matrix *X) {
    if (!scaler) {
        NULL_SCALER_ERROR();
        return;
    }
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (scaler->col_start > X->cols || scaler->col_end > X->cols) {
        INDEX_ERROR();
        return;
    }
    if (scaler->fitted == 0) {
        CUSTOM_ERROR("Scaler must be fitted before use");
        return;
    }

    int n = 0;
    for (int j = scaler->col_start; j < scaler->col_end; j++) {
        for (int i = 0; i < X->rows; i++) {
            double new_val = 0;
            const double x = matrix_get(X, i, j);
            switch (scaler->type) {
                case MIN_MAX_NORMALIZATION: {
                    const double max = scaler->params1[n];
                    const double min = scaler->params2[n];
                    new_val = x * (max - min) + min;
                    break;
                }
                case MEAN_NORMALIZATION: {
                    const double mean = scaler->params1[n];
                    const double diff = scaler->params2[n];
                    new_val = x * diff + mean;
                    break;
                }
                case STANDARDIZATION: {
                    const double mean = scaler->params1[n];
                    const double std = scaler->params2[n];
                    new_val = x * std + mean;
                    break;
                }
                default: {
                    CUSTOM_ERROR("Invalid scaler type");
                    return;
                }
            }
            matrix_set(X, i, j, new_val);
        }
        n++;
    }
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaler_inverse_transform
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>scaler_inverse_transform</span>(Scaler *scaler, Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Reverses the scaling transformation, converting scaled values back to their
            <span style={{ color }}> original scale</span>.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The inverse formula depends on the scaler type:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`MIN_MAX:         x = x' * (max - min) + min
MEAN:            x = x' * (max - min) + mean
STANDARDIZATION: x = x' * std + mean`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> This is essential for interpreting model predictions that were made on scaled data.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>scaler</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Scaler*</td>
                <td className="px-4 py-3 text-white/70">Pointer to a fitted scaler.</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Scaled matrix to inverse-transform in-place.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>. Restores original values in-place.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns early with an error if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Scaler is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Column range exceeds matrix dimensions</li>
            <li><span style={{ color }}>{'>'}</span> Scaler is not fitted (fitted == 0)</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat scaler_inverse_transform.c</h2>
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
            <code>{`#include "scaler.h"

int main() {
    Matrix *X = read_csv("data.csv", ',');

    Scaler *scaler = scaler_create(STANDARDIZATION, 0, 3);
    scaler_fit_transform(scaler, X);

    // X is now scaled (mean=0, std=1)
    matrix_print_head(X, 3);

    // Reverse the scaling to get original values back
    scaler_inverse_transform(scaler, X);

    // X is back to its original scale
    matrix_print_head(X, 3);

    scaler_free(scaler);
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
              <span style={{ color }}>{'>'}</span> The scaler must be fitted first — calling on an unfitted scaler triggers an error.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Modifies the matrix <span style={{ color }}>in-place</span>.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Useful for converting model predictions back to interpretable values.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Applying transform then inverse_transform should return the original values (within floating-point precision).
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export function Scaling() {
  const { color } = useTheme()
  const location = useLocation()
  const subPath = location.pathname.replace('/guide/scaling', '').replace('/', '')

  switch (subPath) {
    case 'structure':
      return <ScalingStructure color={color} />
    case 'scaler_create':
      return <ScalerCreate color={color} />
    case 'scaler_free':
      return <ScalerFree color={color} />
    case 'scaler_fit':
      return <ScalerFit color={color} />
    case 'scaler_transform':
      return <ScalerTransform color={color} />
    case 'scaler_fit_transform':
      return <ScalerFitTransform color={color} />
    case 'scaler_inverse_transform':
      return <ScalerInverseTransform color={color} />
    default:
      return <ScalingOverview color={color} />
  }
}
