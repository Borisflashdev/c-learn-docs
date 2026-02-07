import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

// Helper component for function links
function FuncLink({ name, color }: { name: string; color: string }) {
  const navigate = useNavigate()
  return (
    <span
      onClick={() => navigate(`/guide/linear_regression/${name}`)}
      className="cursor-pointer underline transition-colors hover:opacity-70"
      style={{ color }}
    >
      {name}()
    </span>
  )
}

const headerFile = `#ifndef LINEAR_REGRESSION_H
#define LINEAR_REGRESSION_H

#include "../matrix/matrix.h"


typedef struct {
    Vector *coef_;
    double intercept_;
    double l2_lambda_;
    int fit_intercept;
    int number_of_features;
} LinearRegression;

LinearRegression *linear_regression_create(int number_of_features, int fit_intercept, double l2_lambda);
void linear_regression_free(LinearRegression *linear_regression);

void linear_regression_fit(LinearRegression *model, Matrix *X, Vector *y);
Vector *linear_regression_predict(LinearRegression *model, Matrix *X);

#endif`

function RegressionOverview({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        linear_regression
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat overview.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The <span style={{ color }}>LinearRegression</span> module implements
            linear regression using the <span style={{ color }}>Normal Equation</span> (closed-form solution).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> It finds the optimal weights by directly computing:{' '}
            <span style={{ color }}>β = (XᵀX)⁻¹Xᵀy</span>, which gives the exact solution without iteration.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Supports optional <span style={{ color }}>L2 (Ridge) regularization</span> to
            prevent overfitting, and configurable <span style={{ color }}>intercept fitting</span>.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat note.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Important:</span> This model uses the{' '}
            <span style={{ color }}>Normal Equation</span> to compute the optimal weights analytically.
            This is efficient for small to medium datasets but involves matrix inversion, which scales as O(n³).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> For large datasets or when iterative optimization is preferred,
            C Learn also provides <span style={{ color }}>GDRegression</span> — a linear regression model that uses{' '}
            <span style={{ color }}>Gradient Descent</span> to learn the weights incrementally.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Choose <span style={{ color }}>LinearRegression</span> when: exact solution needed,
            small/medium data, fast one-shot training.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Choose <span style={{ color }}>GDRegression</span> when: large datasets,
            streaming/online learning, more control over optimization process.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat linear_regression.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{headerFile}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

function RegressionStructure({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        linear_regression_structure
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat math_definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Linear regression</span> models the relationship
            between a dependent variable y and one or more independent variables X by fitting a linear equation.
          </p>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Simple Linear Regression</span> (one feature):
          </p>
          <div className="mt-2 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`y = β₀ + β₁x

β₀ = intercept (bias term)
β₁ = coefficient (weight)`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Multiple Linear Regression</span> (n features):
          </p>
          <div className="mt-2 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ

In matrix form: y = Xβ`}</pre>
          </div>

          <p className="mt-6 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Normal Equation</span> (closed-form solution):
          </p>
          <div className="mt-2 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`β = (XᵀX)⁻¹Xᵀy

Computes the exact optimal weights in one step.
No learning rate, no iterations, no convergence issues.`}</pre>
          </div>
          <p className="mt-2 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Time complexity: <span style={{ color }}>O(n³)</span> due to matrix inversion,
            where n is the number of features.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat why_regression_in_ml.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Linear regression is one of the most <span style={{ color }}>fundamental algorithms in machine learning</span>:
          </p>
          <ul className="mt-4 space-y-3 pl-6 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Prediction</span> — forecast continuous values
              like prices, temperatures, sales figures.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Feature importance</span> — coefficients reveal
              which features have the strongest influence on the target.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Baseline model</span> — simple and interpretable,
              often used as a benchmark before trying more complex models.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Foundation</span> — many advanced models (logistic regression,
              neural networks) build upon linear regression concepts.
            </li>
          </ul>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Important:</span> Linear regression assumes a linear
            relationship between features and target. For non-linear data, consider polynomial features or other models.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat linear_regression_struct.c</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> In C Learn, a linear regression model is defined as:
          </p>
          <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
            <pre className="font-mono text-default text-white/80">
              <code>{`typedef struct {
    Vector *coef_;
    double intercept_;
    double l2_lambda_;
    int fit_intercept;
    int number_of_features;
} LinearRegression;`}</code>
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
                  <td className="border-r border-white px-4 py-3" style={{ color }}>coef_</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">Vector*</td>
                  <td className="px-4 py-3 text-white/70">Learned coefficients (weights) for each feature</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>intercept_</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">double</td>
                  <td className="px-4 py-3 text-white/70">Learned bias term (β₀). Only used if fit_intercept == 1</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>l2_lambda_</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">double</td>
                  <td className="px-4 py-3 text-white/70">L2 regularization strength. 0.0 = no regularization</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>fit_intercept</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Whether to fit an intercept term (0 or 1)</td>
                </tr>
                <tr>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>number_of_features</td>
                  <td className="border-r border-white px-4 py-3 text-white/70">int</td>
                  <td className="px-4 py-3 text-white/70">Number of input features (columns in X)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat linear_regression.h</h2>
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
                    <FuncLink name="linear_regression_create" color={color} />, <FuncLink name="linear_regression_free" color={color} />
                  </td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Training</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="linear_regression_fit" color={color} />
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>Inference</td>
                  <td className="px-4 py-3 text-white/70">
                    <FuncLink name="linear_regression_predict" color={color} />
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

function LRCreate({ color }: { color: string }) {
  const implementation = `LinearRegression *linear_regression_create(const int number_of_features, const int fit_intercept, const double l2_lambda) {
    if (number_of_features < 1) {
        INDEX_ERROR();
        return NULL;
    }
    if (fit_intercept != 0 && fit_intercept != 1) {
        CUSTOM_ERROR("Property 'fit_intercept' must be 0 or 1");
        return NULL;
    }

    LinearRegression *lr = malloc(sizeof(LinearRegression));
    lr->coef_ = vector_create(number_of_features);
    if (!lr->coef_) {
        ALLOCATION_ERROR();
        return NULL;
    }
    lr->intercept_ = 0;
    lr->number_of_features = number_of_features;
    lr->l2_lambda_ = l2_lambda;
    lr->fit_intercept = fit_intercept;

    return lr;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        linear_regression_create
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>LinearRegression *<span style={{ color }}>linear_regression_create</span>(int number_of_features, int fit_intercept, double l2_lambda);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Creates a new linear regression model with the specified configuration.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The coefficient vector is initialized to <span style={{ color }}>zeros</span> and
            the intercept to <span style={{ color }}>0</span>. These values are learned during{' '}
            <FuncLink name="linear_regression_fit" color={color} />.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Set <span style={{ color }}>l2_lambda</span> to 0.0 for standard linear regression,
            or to a positive value for Ridge (L2) regularization.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>number_of_features</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Number of input features. Must be &gt;= 1.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>fit_intercept</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const int</td>
                <td className="px-4 py-3 text-white/70">Whether to fit a bias term. Must be 0 or 1.</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>l2_lambda</td>
                <td className="border-r border-white px-4 py-3 text-white/70">const double</td>
                <td className="px-4 py-3 text-white/70">L2 regularization strength. 0.0 for no regularization.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a pointer to the newly created <span style={{ color }}>LinearRegression</span> structure.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> number_of_features &lt; 1</li>
            <li><span style={{ color }}>{'>'}</span> fit_intercept is not 0 or 1</li>
            <li><span style={{ color }}>{'>'}</span> Memory allocation fails</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat linear_regression_create.c</h2>
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
            <code>{`#include "linear_regression.h"

int main() {
    // Create a model with 3 features, intercept, no regularization
    LinearRegression *model = linear_regression_create(3, 1, 0.0);

    if (model == NULL) {
        printf("Failed to create model\\n");
        return 1;
    }

    // model->coef_ is a zero vector of dim 3
    // model->intercept_ == 0
    // model->fit_intercept == 1
    // model->l2_lambda_ == 0.0

    linear_regression_free(model);
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
              <span style={{ color }}>{'>'}</span> Always check if the returned pointer is <span style={{ color }}>NULL</span> before using the model.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The caller is responsible for freeing the memory using <FuncLink name="linear_regression_free" color={color} />.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>fit_intercept = 1</span> adds a column of ones to X during fit, learning a bias term β₀.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The coefficient vector is allocated with <span style={{ color }}>vector_create</span>, so all weights start at 0.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function L2Ridge({ color }: { color: string }) {
  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        l2_ridge
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat definition.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> <span style={{ color }}>Ridge Regression</span> (L2 regularization) is a
            technique that adds a penalty term to the cost function to prevent overfitting.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Instead of minimizing just the error, it minimizes:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`Cost = ||y - Xβ||² + λ||β||²

||y - Xβ||² = prediction error (RSS)
λ||β||²     = regularization penalty
λ           = regularization strength (l2_lambda)`}</pre>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat normal_equation.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The Normal Equation with L2 regularization becomes:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`β = (XᵀX + λI)⁻¹Xᵀy

Without regularization (λ = 0):
β = (XᵀX)⁻¹Xᵀy

With regularization (λ > 0):
β = (XᵀX + λI)⁻¹Xᵀy`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Adding <span style={{ color }}>λI</span> to XᵀX makes the matrix more
            stable and always invertible, even when features are correlated (multicollinearity).
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> When <span style={{ color }}>fit_intercept = 1</span>, the regularization
            is <span style={{ color }}>not applied</span> to the intercept term — the first diagonal element of λI is set to 0.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat when_to_use.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Use L2 regularization when:
          </p>
          <ul className="mt-4 space-y-3 pl-6 font-mono text-default text-white/70">
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Overfitting</span> — model performs well on training data but poorly on test data.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Multicollinearity</span> — features are highly correlated, making XᵀX nearly singular.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Many features</span> — when number of features is large relative to samples.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> <span style={{ color }}>Stability</span> — regularization makes the solution more numerically stable.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat lambda_values.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <div className="overflow-x-auto rounded border border-white bg-black/40">
            <table className="w-full font-mono text-default">
              <thead>
                <tr className="border-b border-white">
                  <th className="border-r border-white px-4 py-3 text-left text-white/90">λ VALUE</th>
                  <th className="px-4 py-3 text-left text-white/90">EFFECT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>0.0</td>
                  <td className="px-4 py-3 text-white/70">No regularization — standard linear regression</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>0.01 - 0.1</td>
                  <td className="px-4 py-3 text-white/70">Light regularization — slight shrinkage of coefficients</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-3" style={{ color }}>0.1 - 1.0</td>
                  <td className="px-4 py-3 text-white/70">Moderate regularization — noticeable coefficient shrinkage</td>
                </tr>
                <tr>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>{'>'} 1.0</td>
                  <td className="px-4 py-3 text-white/70">Strong regularization — coefficients pushed close to zero</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The optimal λ value is typically found using cross-validation.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat example.c</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code>{`#include "linear_regression.h"

int main() {
    Matrix *X = read_csv("train.csv", ',');
    Vector *y = matrix_to_vector(X, 0, 0, X->rows);

    // Without regularization
    LinearRegression *model = linear_regression_create(3, 1, 0.0);

    // With Ridge regularization (λ = 0.1)
    LinearRegression *ridge = linear_regression_create(3, 1, 0.1);

    linear_regression_fit(model, X, y);
    linear_regression_fit(ridge, X, y);

    // Ridge coefficients will be smaller than standard model
    vector_print(model->coef_);
    vector_print(ridge->coef_);

    linear_regression_free(model);
    linear_regression_free(ridge);
    matrix_free(X);
    vector_free(y);
    return 0;
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

function LRFree({ color }: { color: string }) {
  const implementation = `void linear_regression_free(LinearRegression *linear_regression) {
    if (!linear_regression) {
        NULL_LINEAR_REGRESSION_ERROR();
        return;
    }

    if (linear_regression->coef_) {
        vector_free(linear_regression->coef_);
    }
    free(linear_regression);
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        linear_regression_free
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>linear_regression_free</span>(LinearRegression *linear_regression);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Frees all memory associated with a linear regression model. This includes
            the coefficient vector (<span style={{ color }}>coef_</span>) and the LinearRegression structure itself.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Always call this function when you're done using a model
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>linear_regression</td>
                <td className="border-r border-white px-4 py-3 text-white/70">LinearRegression*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the model to free.</td>
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
            <span style={{ color }}>&gt;</span> If linear_regression is NULL, prints an error message via <span style={{ color }}>NULL_LINEAR_REGRESSION_ERROR()</span>.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat linear_regression_free.c</h2>
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
            <code>{`#include "linear_regression.h"

int main() {
    LinearRegression *model = linear_regression_create(3, 1, 0.0);

    // ... train and use the model ...

    // Free when done
    linear_regression_free(model);
    model = NULL;  // Good practice to avoid dangling pointer

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
              <span style={{ color }}>{'>'}</span> The coefficient vector is freed via <span style={{ color }}>vector_free</span> before the struct is freed.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Must be called for every model created with <FuncLink name="linear_regression_create" color={color} />.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function LRFit({ color }: { color: string }) {
  const implementation = `void linear_regression_fit(LinearRegression *model, Matrix *X, Vector *y) {
    if (!model) {
        NULL_LINEAR_REGRESSION_ERROR();
        return;
    }
    if (!X) {
        NULL_MATRIX_ERROR();
        return;
    }
    if (!y) {
        NULL_VECTOR_ERROR();
        return;
    }
    if (X->rows != y->dim || X->cols != model->number_of_features) {
        CUSTOM_ERROR("Dimension mismatch");
        return;
    }

    Matrix *X_use = NULL;
    if (model->fit_intercept == 0) {
        X_use = matrix_copy(X);
    } else {
        Matrix *X_1 = matrix_create(X->rows, 1);
        for (int i = 0; i < X->rows; i++) {
            matrix_set(X_1, i, 0, 1);
        }
        X_use = matrix_concat(X_1, X);
        matrix_free(X_1);
    }

    Matrix *lambda_I = matrix_create(X_use->cols, X_use->cols);
    if (!lambda_I) {
        NULL_MATRIX_ERROR();
        return;
    }
    for (int i = 0; i < lambda_I->cols; i++) {
        lambda_I->data[i * lambda_I->cols + i] = model->l2_lambda_;
    }

    if (model->fit_intercept == 1) {
        matrix_set(lambda_I, 0, 0, 0);
    }

    Matrix *y_mat = vector_to_matrix(y);
    Matrix *Xt = matrix_transpose(X_use, 0);
    Matrix *XtX = matrix_multiplication(Xt, X_use);
    Matrix *XtX_lambda = matrix_arithmetic(XtX, lambda_I, '+');
    Matrix *XtX_inv = matrix_inverse(XtX_lambda, 0);
    Matrix *XtX_inv_Xt = matrix_multiplication(XtX_inv, Xt);
    Matrix *w_mat = matrix_multiplication(XtX_inv_Xt, y_mat);

    if (model->fit_intercept == 0) {
        for (int i = 0; i < w_mat->rows; i++) {
            vector_set(model->coef_, i, matrix_get(w_mat, i, 0));
        }
    } else {
        model->intercept_ = matrix_get(w_mat, 0, 0);
        for (int i = 1; i < w_mat->rows; i++) {
            vector_set(model->coef_, i-1, matrix_get(w_mat, i, 0));
        }
    }

    matrix_free(X_use);
    matrix_free(lambda_I);
    matrix_free(y_mat);
    matrix_free(Xt);
    matrix_free(XtX);
    matrix_free(XtX_inv);
    matrix_free(XtX_inv_Xt);
    matrix_free(w_mat);
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        linear_regression_fit
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>void <span style={{ color }}>linear_regression_fit</span>(LinearRegression *model, Matrix *X, Vector *y);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Trains the linear regression model using the <span style={{ color }}>Normal Equation</span>.
            Computes the optimal weights that minimize the cost function.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The computation follows these steps:
          </p>
          <div className="mt-4 rounded border border-white bg-black/60 p-4 font-mono text-default text-white/80">
            <pre>{`1. If fit_intercept == 1, prepend a column of 1s to X
2. Build regularization matrix λI (with λI[0][0] = 0 if intercept)
3. Compute: β = (XᵀX + λI)⁻¹Xᵀy
4. Extract intercept (first element) and coefficients`}</pre>
          </div>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> After fitting, the learned weights are stored in <span style={{ color }}>model-&gt;coef_</span> and
            the bias in <span style={{ color }}>model-&gt;intercept_</span>.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>model</td>
                <td className="border-r border-white px-4 py-3 text-white/70">LinearRegression*</td>
                <td className="px-4 py-3 text-white/70">Pointer to the model to train.</td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Training feature matrix (rows = samples, cols = features).</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>y</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Vector*</td>
                <td className="px-4 py-3 text-white/70">Target values vector. Must have dim == X-&gt;rows.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>void</span>. Updates model-&gt;coef_ and model-&gt;intercept_ in-place.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns early with an error if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Model is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Vector y is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Dimension mismatch (X-&gt;rows != y-&gt;dim or X-&gt;cols != number_of_features)</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat linear_regression_fit.c</h2>
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
            <code>{`#include "linear_regression.h"

int main() {
    Matrix *X = read_csv("features.csv", ',');
    Vector *y = matrix_to_vector(X, 0, 0, X->rows);

    LinearRegression *model = linear_regression_create(X->cols, 1, 0.0);
    linear_regression_fit(model, X, y);

    // Print learned coefficients and intercept
    printf("Intercept: %f\\n", model->intercept_);
    vector_print(model->coef_);

    linear_regression_free(model);
    matrix_free(X);
    vector_free(y);
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
              <span style={{ color }}>{'>'}</span> Uses the Normal Equation — no learning rate or iteration count needed.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> All intermediate matrices are properly freed after computation.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> When <span style={{ color }}>fit_intercept = 1</span>, a column of 1s is prepended to X, and the intercept is not regularized.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Requires matrix inversion — may be numerically unstable if features are highly correlated and λ = 0.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function LRPredict({ color }: { color: string }) {
  const implementation = `Vector *linear_regression_predict(LinearRegression *model, Matrix *X) {
    if (!model) {
        NULL_LINEAR_REGRESSION_ERROR();
        return NULL;
    }
    if (!X) {
        NULL_MATRIX_ERROR();
        return NULL;
    }

    Matrix *w_mat = vector_to_matrix(model->coef_);
    Matrix *y_hat = matrix_multiplication(X, w_mat);
    Vector *res = matrix_to_vector(y_hat, 0, 0, y_hat->rows);

    matrix_free(w_mat);
    matrix_free(y_hat);
    if (model->fit_intercept == 0) {
        return res;
    }

    for (int i = 0; i < res->dim; i++) {
        res->data[i] += model->intercept_;
    }
    return res;
}`

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        linear_regression_predict
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat signature.h</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/60 p-4">
          <pre className="font-mono text-default text-white/80">
            <code>Vector *<span style={{ color }}>linear_regression_predict</span>(LinearRegression *model, Matrix *X);</code>
          </pre>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat description.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Generates predictions using the trained model. Computes:{' '}
            <span style={{ color }}>ŷ = Xβ + β₀</span>
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The prediction is performed as matrix multiplication of X with the coefficient
            vector, then adding the intercept to each prediction if <span style={{ color }}>fit_intercept = 1</span>.
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
                <td className="border-r border-white px-4 py-3" style={{ color }}>model</td>
                <td className="border-r border-white px-4 py-3 text-white/70">LinearRegression*</td>
                <td className="px-4 py-3 text-white/70">Pointer to a trained model.</td>
              </tr>
              <tr>
                <td className="border-r border-white px-4 py-3" style={{ color }}>X</td>
                <td className="border-r border-white px-4 py-3 text-white/70">Matrix*</td>
                <td className="px-4 py-3 text-white/70">Feature matrix to predict on. Cols must match number_of_features.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat return.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns a new <span style={{ color }}>Vector*</span> containing the predicted values.
            The caller is responsible for freeing this vector.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Returns <span style={{ color }}>NULL</span> if:
          </p>
          <ul className="mt-2 space-y-2 pl-6 font-mono text-default text-white/70">
            <li><span style={{ color }}>{'>'}</span> Model is NULL</li>
            <li><span style={{ color }}>{'>'}</span> Matrix X is NULL</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat linear_regression_predict.c</h2>
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
            <code>{`#include "linear_regression.h"

int main() {
    Matrix *X_train = read_csv("train.csv", ',');
    Vector *y_train = matrix_to_vector(X_train, 0, 0, X_train->rows);
    Matrix *X_test = read_csv("test.csv", ',');

    LinearRegression *model = linear_regression_create(X_train->cols, 1, 0.0);
    linear_regression_fit(model, X_train, y_train);

    // Predict on test data
    Vector *predictions = linear_regression_predict(model, X_test);
    vector_print(predictions);

    // Don't forget to free the returned vector
    vector_free(predictions);
    linear_regression_free(model);
    matrix_free(X_train);
    matrix_free(X_test);
    vector_free(y_train);
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
              <span style={{ color }}>{'>'}</span> The model must be trained with <FuncLink name="linear_regression_fit" color={color} /> before calling predict.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Returns a <span style={{ color }}>new vector</span> — the caller must free it with vector_free().
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> The number of columns in X must match <span style={{ color }}>number_of_features</span>.
            </li>
            <li>
              <span style={{ color }}>{'>'}</span> Intermediate matrices (w_mat, y_hat) are freed internally.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export function Regression() {
  const { color } = useTheme()
  const location = useLocation()
  const subPath = location.pathname.replace('/guide/linear_regression', '').replace('/', '')

  switch (subPath) {
    case 'structure':
      return <RegressionStructure color={color} />
    case 'linear_regression_create':
      return <LRCreate color={color} />
    case 'l2_ridge':
      return <L2Ridge color={color} />
    case 'linear_regression_free':
      return <LRFree color={color} />
    case 'linear_regression_fit':
      return <LRFit color={color} />
    case 'linear_regression_predict':
      return <LRPredict color={color} />
    default:
      return <RegressionOverview color={color} />
  }
}
